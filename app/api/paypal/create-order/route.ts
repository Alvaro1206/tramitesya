export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextResponse } from "next/server";
import { getPayPalAccessToken } from "@/lib/paypal";

const PRICE = "9.90";
const CURRENCY = "EUR";

export async function POST() {
  try {
    const accessToken = await getPayPalAccessToken();

    const response = await fetch(`${process.env.PAYPAL_API_BASE}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
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

    if (!response.ok) {
      const detail = await response.text();
      console.error("PayPal create order failed", detail);
      return NextResponse.json({ error: "create_failed", detail }, { status: 400 });
    }

    const data = await response.json();
    return NextResponse.json({ id: data.id });
  } catch (error) {
    console.error("Error creating PayPal order", error);
    return NextResponse.json({ error: "create_failed" }, { status: 500 });
  }
}
