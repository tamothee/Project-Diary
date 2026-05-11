/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['assets.example.com'],
  },
}

module.exports = nextConfig
