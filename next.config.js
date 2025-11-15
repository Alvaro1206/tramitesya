/** @type {import('next').NextConfig} */

const CSP = `
  default-src 'self';
  base-uri 'self';
  object-src 'none';
  frame-ancestors 'self';
  upgrade-insecure-requests;
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.paypal.com https://*.paypal.com https://*.paypalobjects.com;
  connect-src 'self' https://api.sandbox.paypal.com https://api-m.paypal.com https://www.paypal.com https://*.paypal.com https://*.paypalobjects.com;
  frame-src https://www.paypal.com https://*.paypal.com;
  child-src https://www.paypal.com https://*.paypal.com;
  img-src 'self' data: blob: https://*.paypal.com https://*.paypalobjects.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com data:;
`
  .replace(/\s{2,}/g, " ")
  .trim();

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
