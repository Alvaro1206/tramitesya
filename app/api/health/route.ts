// app/api/health/route.ts
export const runtime = "nodejs";

export async function GET() {
  const ok = !!process.env.POSTGRES_URL && !!process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID && !!process.env.DATA_ENC_SECRET;
  return new Response(JSON.stringify({ ok }), {
    headers: { "Content-Type": "application/json" },
  });
}
