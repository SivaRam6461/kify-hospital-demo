import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kify-hospital-demo",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
