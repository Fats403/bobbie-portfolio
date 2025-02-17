import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "assets.aceternity.com",
      },
      {
        hostname: "firebasestorage.googleapis.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "placehold.co",
      },
      {
        hostname: "cdn.myportfolio.com",
      },
    ],
  },
};

export default nextConfig;
