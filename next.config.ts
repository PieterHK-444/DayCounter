import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Remove basePath for now to fix theme issues
  // basePath: process.env.NODE_ENV === "production" ? "/daycounter" : "",
  experimental: {
    // Enable static export optimizations
    optimizePackageImports: ["next-themes"],
  },
};

export default nextConfig;
