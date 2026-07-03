import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@animui/ui"],
  devIndicators: false,
  images: {
    qualities: [75],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "@animui/ui"],
  },
};

export default nextConfig;
