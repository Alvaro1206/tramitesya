export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextResponse } from "next/server";
import { getPayPalAccessToken } from "@/lib/paypal";

type Params = { params: { orderId: string } };

export async function POST(_: Request, { params }: Params) {
  try {
    const accessToken = await getPayPalAccessToken();

    const response = await fetch(
      `${process.env.PAYPAL_API_BASE}/v2/checkout/orders/${params.orderId}/capture`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const data = await response.json();
    if (!response.ok || data.status !== "COMPLETED") {
      return NextResponse.json({ error: "capture_failed", detail: data }, { status: 400 });
    }

    return NextResponse.json({
      status: data.status,
      orderId: data.id,
      captureId: data.purchase_units?.[0]?.payments?.captures?.[0]?.id,
    });
  } catch (error) {
    console.error("Error capturing PayPal order", error);
    return NextResponse.json({ error: "capture_failed" }, { status: 500 });
  }
}
