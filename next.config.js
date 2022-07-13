/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { tls: false };
    config.resolve.fallback = { net: false };
    config.resolve.fallback = { fs: false };

    return config;
  },
}

module.exports = nextConfig
