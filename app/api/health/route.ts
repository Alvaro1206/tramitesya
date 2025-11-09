export async function GET() {
  const ok = Boolean(process.env.POSTGRES_URL) && Boolean(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID) && Boolean(process.env.DATA_ENC_SECRET);
  return new Response(JSON.stringify({ ok }), {
    headers: { "Content-Type": "application/json" },
  });
}
