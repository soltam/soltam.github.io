import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  basePath: "/soltam.github.io", // Replace <repo-name> with your GitHub repository name
  assetPrefix: "/soltam.github.io/",
  images: {
    unoptimized: true, // Required to serve images without Next.js optimizations,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
