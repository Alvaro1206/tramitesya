/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/vida-laboral", destination: "/tse", permanent: true },
      { source: "/informe-dgt", destination: "/tse", permanent: true },
    ];
  },
};

module.exports = nextConfig;
