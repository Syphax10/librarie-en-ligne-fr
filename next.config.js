/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "file.pngbackground.com",
      "www.shutterstock.com",
      "www.dermalina.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
