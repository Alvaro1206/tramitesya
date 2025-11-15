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

    const response = await fetch(`${base}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
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
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      }),
    });

    const text = await response.text();
    if (!response.ok) {
      console.error("PayPal create order failed", text);
      return NextResponse.json({ error: "create_failed", detail: text }, { status: 400 });
    }

    const data = JSON.parse(text);
    return NextResponse.json({ id: data.id });
  } catch (error) {
    console.error("Error creating PayPal order", error);
    return NextResponse.json({ error: "create_failed" }, { status: 500 });
  }
}
