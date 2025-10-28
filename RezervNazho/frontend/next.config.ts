import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // App Router is default in Next.js 15
  experimental: {
    serverActions: true
  }
}

export default nextConfig
