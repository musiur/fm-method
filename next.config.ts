import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "exwj7ki8kn.ufs.sh",
      },
      {
        hostname: "so90190s4w.ufs.sh",
      },
      {
        hostname: "github.com",
      },
      {
        hostname: "lms.fmmethod.online",
      },
    ],
  },
};

export default nextConfig;
