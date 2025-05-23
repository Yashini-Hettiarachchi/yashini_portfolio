/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/yashini_portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/yashini_portfolio/' : '',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    };
    return config;
  },
  experimental: {
    turbo: {
      rules: {
        // Configure Turbopack rules here
        '*.{js,jsx,ts,tsx}': ['swc'],
      },
    },
  },
};

module.exports = nextConfig; 