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

  // SEO and metadata - using stable build ID for better caching
  generateBuildId: async () => {
    // Use a stable identifier that only changes when the build process changes
    // This enables better CDN and browser caching between deployments
    // In CI/CD, you could use commit hash: process.env.COMMIT_HASH?.substring(0, 8) || 
    return 'tiktok-calculator-v1';
  },
};

module.exports = nextConfig;