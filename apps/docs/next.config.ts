import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@animui/ui"],
  devIndicators: false,
  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;
