import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "googleusercontent.com", // Also add this for the hero image I generated
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
