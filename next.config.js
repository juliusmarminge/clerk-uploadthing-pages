/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: false, // THIS IS THE FLAG THAT MATTERS
  },
};

module.exports = nextConfig;
