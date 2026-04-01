/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/sk-labs",
  assetPrefix: "/sk-labs",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;