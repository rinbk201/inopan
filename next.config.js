/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['source.unsplash.com','stock.adobe.io/Rest'],
  },
};

module.exports = nextConfig;
