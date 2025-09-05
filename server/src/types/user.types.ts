import mongoose from "mongoose";
import { Document } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  setPassword(plain: string): Promise<void>;
  verifyPassword(plain: string): Promise<boolean>;
  generateToken(): string;
}

interface UserModel extends mongoose.Model<IUser> {
  hashPassword(password: string): Promise<string>;
  verifyToken(token: string): Promise<any>;
}

export type { IUser, UserModel };
