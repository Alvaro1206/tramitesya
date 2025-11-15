/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  base-uri 'self';
  object-src 'none';
  frame-ancestors 'self';
  form-action 'self';
  upgrade-insecure-requests;

  script-src 'self' 'unsafe-inline' https://www.paypal.com https://*.paypal.com https://*.paypalobjects.com;
  connect-src 'self' https://api-m.paypal.com https://*.paypal.com https://*.paypalobjects.com;
  frame-src https://www.paypal.com https://*.paypal.com;
  img-src 'self' data: blob: https://www.paypal.com https://*.paypal.com https://*.paypalobjects.com https://i.paypal.com;
  style-src 'self' 'unsafe-inline';
  font-src 'self' data:;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  { key: "Content-Security-Policy", value: ContentSecurityPolicy },
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
