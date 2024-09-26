const withImages = require('next-images');

const nextConfig = withImages({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  webpack(config, options) {
    return config;
  },
});

module.exports = nextConfig;
