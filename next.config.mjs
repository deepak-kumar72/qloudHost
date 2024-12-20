/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash:true,

  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://qloudhost.com/blog/:path*', // WordPress blog location
      },
    ];
  },
};

export default nextConfig;