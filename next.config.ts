import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['cephie-ui'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },
};

export default nextConfig;
