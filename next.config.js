/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,

  // Enable optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Performance optimizations
  // experimental: {
  //   optimizeCss: true,
  // },

  // Use git commit hash for cache-busting between deployments
  generateBuildId: async () => {
    const { execSync } = require('child_process');
    try {
      return execSync('git rev-parse --short HEAD').toString().trim();
    } catch {
      return `build-${Date.now()}`;
    }
  },
};

module.exports = nextConfig;