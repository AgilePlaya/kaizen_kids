import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/kaizen_kids/' : '',
  basePath: isProd ? '/kaizen_kids' : '',
  output: 'export'
};

// next.config.js
module.exports = {
  distDir: 'out', // Outputting the build to 'out' directory
  output: 'standalone', // change from 'export' to 'standalone'
};

export default nextConfig;
