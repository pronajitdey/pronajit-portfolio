/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "icons8.com"
      },
      {
        protocol: "https",
        hostname: "i.imgur.com"
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net"
      }
    ]
  }
};

module.exports = nextConfig;
