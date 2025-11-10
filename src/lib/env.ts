export const ENV = {
  isProd: process.env.VERCEL_ENV === "production",
  POSTGRES_URL: process.env.POSTGRES_URL!,
  DATA_ENC_SECRET: process.env.DATA_ENC_SECRET!,
  NEXT_PUBLIC_PAYPAL_CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID!,
  PAYPAL_SECRET: process.env.PAYPAL_SECRET!,
  PAYPAL_API_BASE: process.env.PAYPAL_API_BASE!,
};
