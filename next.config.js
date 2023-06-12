/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/houses",
        destination: "/houses/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
