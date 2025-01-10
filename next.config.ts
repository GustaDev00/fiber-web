import type { NextConfig } from "next";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
    removeConsole: true,
  },
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX,
  trailingSlash: true,
  output: "export",
  distDir: "build",
  basePath: process.env.NEXT_PUBLIC_ASSET_PREFIX,
  experimental: {
    optimizePackageImports: ["react-icons/*"],
    nextScriptWorkers: true,
  },
};

export default withBundleAnalyzer(nextConfig);
