import mongoose from "mongoose";
import config from "../configs/config.ts";

const connectDB = () => {
  mongoose
    .connect(config.MONGODB_URI as string)
    .then(() => {
      console.log("DB connected");
    })
    .catch(() => {
      console.log("DB connection failed");
    });
};

export default connectDB;
