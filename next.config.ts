import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "u9a6wmr3as.ufs.sh" }],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/fsw-donalds", // substitua pelo slug de um restaurante específico
      },
    ];
  },
};

export default nextConfig;
