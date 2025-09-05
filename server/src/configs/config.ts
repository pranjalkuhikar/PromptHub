import dotenv from "dotenv";

dotenv.config();

const _config = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY,
  FRONTEND_URL: process.env.FRONTEND_URL,
};

const config = Object.freeze(_config);

export default config;
