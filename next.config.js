/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

module.exports = nextConfig;
