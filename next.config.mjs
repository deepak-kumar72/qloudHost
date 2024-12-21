/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  async redirects() {
    return [
      {
        source: '/', // Match root of the blog.qloudhost.com domain
        has: [
          {
            type: 'host',
            value: 'blog.qloudhost.com', // Check if host matches blog.qloudhost.com
          },
        ],
        destination: 'https://qloudhost.com/blog/', // Redirect here
        permanent: true, // Indicates a 301 permanent redirect
      },
    ];
  },
};

export default nextConfig;
