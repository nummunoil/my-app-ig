console.log("🔥 USING next.config.mjs");
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my-app-ig",
  assetPrefix: "/my-app-ig/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
