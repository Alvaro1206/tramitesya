import { ENV } from "./env";

const PAYPAL_BASE =
  ENV.PAYPAL_ENV === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";

export function getPayPalBase() {
  return PAYPAL_BASE;
}

let cachedToken: { token: string; exp: number } | null = null;

export async function getPayPalAccessToken() {
  if (cachedToken && cachedToken.exp > Date.now()) {
    return cachedToken.token;
  }

  const basic = Buffer.from(`${ENV.PAYPAL_CLIENT_ID}:${ENV.PAYPAL_SECRET}`).toString("base64");
  const response = await fetch(`${PAYPAL_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  const text = await response.text();
  if (!response.ok) {
    console.error("PayPal OAuth failed:", text);
    throw new Error("paypal_oauth_failed");
  }

  const { access_token, expires_in } = JSON.parse(text);
  cachedToken = {
    token: access_token,
    exp: Date.now() + Math.max(expires_in - 60, 60) * 1000,
  };

  return access_token;
}

export async function verifyPayPalCapture(captureID: string, accessToken: string) {
  const response = await fetch(`${PAYPAL_BASE}/v2/payments/captures/${captureID}`, {
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
