import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../configs/config.ts";
import type { StringValue } from "ms";

interface IUser {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IUserMethods {
  verifyPassword(password: string): Promise<boolean>;
  generateToken(): Promise<string>;
}

interface IUserStatics {
  hashPassword(password: string): Promise<string>;
  verifyToken(token: string): Promise<any>;
}

interface IUserDocument extends IUser, mongoose.Document, IUserMethods {}
interface IUserModel extends mongoose.Model<IUserDocument>, IUserStatics {}

const userSchema = new mongoose.Schema<IUserDocument, IUserModel>(
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
  const options: jwt.SignOptions = {
    expiresIn: config.JWT_EXPIRY as StringValue,
  };
  const token = jwt.sign(
    { id: this._id.toString() },
    config.JWT_SECRET as string,
    options
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

const User = mongoose.model<IUserDocument, IUserModel>("User", userSchema);
export default User;
