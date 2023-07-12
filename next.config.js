/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['platform-lookaside.fbsbx.com', 'avatars.githubusercontent.com'],
    },
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
    FACEBOOK_CLIENT_SECRET: "674db9dc5a6b11b7b928be7973093163"
   }
};

module.exports = nextConfig;
