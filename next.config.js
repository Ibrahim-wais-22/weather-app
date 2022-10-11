/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["assets.weatherstack.com"],
},
}

module.exports = nextConfig
