import config from "./config.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_CONNECTION_STRING: config.DB_CONNECTION_STRING,
    API: config.API,
    NEXTAUTH_SECRET: config.NEXTAUTH_SECRET,
    GOOGLE_CLIENT_SECRET: config.GOOGLE_CLIENT_SECRET,
    GOOGLE_CLIENT_ID: config.GOOGLE_CLIENT_ID
  },
};

export default nextConfig;
