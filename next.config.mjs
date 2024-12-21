/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  async redirects() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://blog.qloudhost.com/:path*', // Redirect to WordPress blog with path forwarding
        permanent: true, // Set to true for a 301 redirect
      },
    ];
  },
};