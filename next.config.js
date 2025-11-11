/** @type {import('next').NextConfig} */

const PAYPAL_DOMAINS = [
  "https://www.paypal.com",
  "https://www.sandbox.paypal.com",
  "https://*.paypal.com",
  "https://*.paypalobjects.com",
];

const CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  `form-action 'self' ${PAYPAL_DOMAINS.slice(0, 2).join(" ")}`,
  "frame-ancestors 'self'",
  `frame-src 'self' ${PAYPAL_DOMAINS.join(" ")}`,
  `connect-src 'self' https://api-m.paypal.com https://api-m.sandbox.paypal.com ${PAYPAL_DOMAINS.join(" ")}`,
  `img-src 'self' data: blob: ${PAYPAL_DOMAINS.join(" ")}`,
  `script-src 'self' 'unsafe-inline' ${PAYPAL_DOMAINS.join(" ")}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: CSP },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "interest-cohort=()" },
];

const nextConfig = {
  async redirects() {
    return [
      { source: "/vida-laboral", destination: "/tse", permanent: true },
      { source: "/informe-dgt", destination: "/tse", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
