/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: "/my-app-ig/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
