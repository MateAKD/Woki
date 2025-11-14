/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next',
  images: {
    unoptimized: false,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs: [],
  },
  // Deshabilitar la comprobación de tipos durante el build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Removing experimental features for Netlify compatibility
  // experimental: {
  //   optimizeCss: true,
  //   scrollRestoration: true,
  // },
};

module.exports = nextConfig;
