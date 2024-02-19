/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  pageExtensions: ['page.tsx', 'page.ts'],
  compiler: {
    styledComponents: true,
  },
  experimental: {
    esmExternals: false,
    concurrentFeatures: true,
    reactRoot: true,
  },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ['@svgr/webpack'],
  //   });

  //   return config;
  // }
}

module.exports = nextConfig
