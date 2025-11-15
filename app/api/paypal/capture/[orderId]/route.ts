export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextResponse } from "next/server";
import { getPayPalAccessToken, getPayPalBase } from "@/lib/paypal";

export async function POST(
  _req: Request,
  { params }: { params: { orderId: string } },
) {
  const { orderId } = params;

  try {
    const accessToken = await getPayPalAccessToken();
    const base = getPayPalBase();

    const res = await fetch(`${base}/v2/checkout/orders/${orderId}/capture`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    });

    const text = await res.text();

    if (!res.ok) {
      console.error("PayPal capture error:", text);
      return NextResponse.json({ error: "capture_failed", detail: text }, { status: 400 });
    }

    return new NextResponse(text, {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    console.error("Capture exception:", err);
    return NextResponse.json({ error: "capture_failed" }, { status: 500 });
  }
}
