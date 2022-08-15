const path = require("path");
/** @type {import('next').NextConfig} */

const {i18n} = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // assetPrefix:"https://bime.sinamn75.com",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  i18n,
};

module.exports = nextConfig;
