/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcMinify: true,
    appDir: true,
    reactStrictMode: true,
  },
  images: {
    domains: [
      'platform-lookaside.fbsbx.com',
      'avatars.githubusercontent.com',
      'upload.wikimedia.org',   // ✅ Thêm vào đây
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'platform-lookaside.fbsbx.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
   env: {
    FACEBOOK_CLIENT_ID: 784918179768814,

   }
};

module.exports = nextConfig;
