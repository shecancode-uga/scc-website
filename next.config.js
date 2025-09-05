/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export
  images: {
    unoptimized: true, // required for GitHub Pages if using next/image
  },
  basePath: '/scc-website', // your repo name
  assetPrefix: '/scc-website', // required for correct asset paths
};

module.exports = nextConfig;
