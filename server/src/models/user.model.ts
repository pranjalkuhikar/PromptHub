import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../configs/config.ts";
import type { IUser, UserModel } from "../types/user.types.ts";

const userSchema = new mongoose.Schema<IUser>(
  {
    username: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);
userSchema.statics.hashPassword = async function (password: string) {
  if (!password) {
    throw new Error("Password is required");
  }
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
};

userSchema.methods.verifyPassword = async function (password: string) {
  if (!password) {
    throw new Error("Password is required");
  }
  if (!this.password) {
    throw new Error("Password is required");
  }
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = async function () {
  if (!config.JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }
  const token = jwt.sign(
    { id: this._id.toString() },
    config.JWT_SECRET as string,
    { expiresIn: config.JWT_EXPIRY as string }
  );
  return token;
};

userSchema.statics.verifyToken = async function (token) {
  if (!token) {
    throw new Error("Token is required");
  }
  if (!config.JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }
  const decoded = jwt.verify(token, config.JWT_SECRET as string);
  return decoded;
};

const User = mongoose.model<IUser, UserModel>("User", userSchema);
export default User;
