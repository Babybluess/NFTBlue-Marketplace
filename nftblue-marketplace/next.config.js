
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      API_KEY: process.env.NEXT_PUBLIC_PINATA_API_KEY,
      API_SECRET: process.env.NEXT_PUBLIC_PINATA_API_SECRET
    }
  }
  
  module.exports = nextConfig
  