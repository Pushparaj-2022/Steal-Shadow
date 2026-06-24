import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@animui/ui"],
  devIndicators: false,
};

export default nextConfig;
