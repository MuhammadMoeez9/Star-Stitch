// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // devIndicators: {
  //   buildActivity: false,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
    ],
  },
};

module.exports = nextConfig;
