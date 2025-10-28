import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Enable static exports if needed
  // output: 'export',
  
  // Image optimization
  images: {
    remotePatterns: [],
  },

  // Internationalization for Persian language
  i18n: {
    locales: ["fa", "en"],
    defaultLocale: "fa",
  },
};

export default nextConfig;
