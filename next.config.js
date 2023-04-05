/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: "/api/:path*",
          destination: `http://localhost:3001/api/:path*`
        }
      ]
    };
  }
};

module.exports = nextConfig;
