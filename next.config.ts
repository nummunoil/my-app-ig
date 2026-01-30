/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/my-app-ig",
  assetPrefix: "/my-app-ig/",
};

module.exports = nextConfig;
