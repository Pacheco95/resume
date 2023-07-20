/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placekitten.com",
      },
    ],
  },
};

module.exports = nextConfig;
