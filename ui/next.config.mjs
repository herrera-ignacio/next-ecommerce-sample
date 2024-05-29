import config from "./config.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_CONNECTION_STRING: config.DB_CONNECTION_STRING,
    API: config.API
  },
};

export default nextConfig;
