export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextResponse } from "next/server";
import { getPayPalAccessToken, getPayPalBase } from "@/lib/paypal";

const PRICE = "9.90";
const CURRENCY = "EUR";

export async function POST() {
  try {
    const base = getPayPalBase();
    const accessToken = await getPayPalAccessToken();

    const paypalRes = await fetch(`${base}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: CURRENCY,
              value: PRICE,
            },
          },
        ],
      }),
    });

    const data = await paypalRes.json().catch(() => null);

    if (!paypalRes.ok || !data) {
      console.error("PayPal create order failed", {
        status: paypalRes.status,
        body: data,
      });
      return NextResponse.json(
        { error: "create_failed", detail: data ?? null },
        { status: 400 }
      );
    }

    if (!data.id) {
      console.error("PayPal create order missing id", data);
      return NextResponse.json(
        { error: "create_failed", detail: "missing id" },
        { status: 400 }
      );
    }

    return NextResponse.json({ id: data.id, status: data.status });
  } catch (error) {
    console.error("Error creating PayPal order", error);
    return NextResponse.json({ error: "create_failed" }, { status: 500 });
  }
}
