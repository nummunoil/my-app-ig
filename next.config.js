/** @type {import('next').NextConfig} */
const repoName = "my-app-ig";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
