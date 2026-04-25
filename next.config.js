/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desabilita o compilador SWC nativo (evita bloqueio do Windows Defender)
  swcMinify: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
