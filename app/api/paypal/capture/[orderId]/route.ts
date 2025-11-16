export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextRequest, NextResponse } from "next/server";
import { getPayPalAccessToken, getPayPalBase } from "@/lib/paypal";

export async function POST(
  _req: NextRequest,
  { params }: { params: { orderId: string } },
) {
  const { orderId } = params;

  if (!orderId) {
    return NextResponse.json({ error: "missing_order_id" }, { status: 400 });
  }

  try {
    const base = getPayPalBase();
    const accessToken = await getPayPalAccessToken();

    const paypalRes = await fetch(`${base}/v2/checkout/orders/${orderId}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        Prefer: "return=representation",
      },
    });

    const data = await paypalRes.json().catch(() => null);

    if (!paypalRes.ok || !data) {
      console.error("PayPal capture failed", {
        status: paypalRes.status,
        body: data,
      });
      return NextResponse.json(
        { error: "capture_failed", detail: data ?? null },
        { status: 400 },
      );
    }

    const paypalOrderId: string | null = data.id ?? null;
    const capture = data.purchase_units?.[0]?.payments?.captures?.[0] ?? null;
    const captureId: string | null = capture?.id ?? null;
    const status: string = data.status ?? capture?.status ?? "UNKNOWN";

    return NextResponse.json({
      status,
      orderId: paypalOrderId,
      captureId,
      raw: data,
    });
  } catch (error) {
    console.error("Error capturing PayPal order", error);
    return NextResponse.json({ error: "capture_failed" }, { status: 500 });
  }
}
