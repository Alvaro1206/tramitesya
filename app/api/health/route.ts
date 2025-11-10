// app/api/health/route.ts
export const runtime = "nodejs";

export async function GET() {
  const env = process.env.VERCEL_ENV || process.env.NODE_ENV || "unknown";
  const status = {
    env,
    POSTGRES_URL: !!process.env.POSTGRES_URL,
    DATA_ENC_SECRET: !!process.env.DATA_ENC_SECRET,
    NEXT_PUBLIC_PAYPAL_CLIENT_ID: !!process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    PAYPAL_CLIENT_ID: !!process.env.PAYPAL_CLIENT_ID,
    PAYPAL_SECRET: !!process.env.PAYPAL_SECRET,
    PAYPAL_API_BASE: process.env.PAYPAL_API_BASE || null,
  };
  const ok = status.POSTGRES_URL && status.DATA_ENC_SECRET && status.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  return new Response(JSON.stringify({ ok, status }), {
    headers: { "Content-Type": "application/json" },
  });
}
