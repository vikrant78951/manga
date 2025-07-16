import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["media.kitsu.app","cdn.noitatnemucod.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.kitsu.app",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.noitatnemucod.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
