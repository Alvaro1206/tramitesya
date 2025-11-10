import { ENV } from "./env";

export async function getPayPalAccessToken() {
  const basic = Buffer.from(`${ENV.PAYPAL_CLIENT_ID}:${ENV.PAYPAL_SECRET}`).toString("base64");
  const response = await fetch(`${ENV.PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("paypal_token_error");
  }

  return (await response.json()) as { access_token: string };
}

export async function verifyPayPalCapture(captureID: string, accessToken: string) {
  const response = await fetch(`${ENV.PAYPAL_API_BASE}/v2/payments/captures/${captureID}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("paypal_capture_error");
  }

  return (await response.json()) as { status?: string };
}
