import dotenv from "dotenv";

dotenv.config();

const _config = {
  PORT: process.env.PORT || "8000",
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGODB_URI:
    process.env.MONGODB_URI || "mongodb://localhost:27017/prompt-hub",
  JWT_SECRET: process.env.JWT_SECRET || "default-secret",
  JWT_EXPIRY: process.env.JWT_EXPIRY || "7d",
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
} as const;

const config = Object.freeze(_config);

export default config;
