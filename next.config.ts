import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/fsw-donalds", // Define o subcaminho base da aplicação
  images: {
    remotePatterns: [{ hostname: "u9a6wmr3as.ufs.sh" }],
  },
};

export default nextConfig;
