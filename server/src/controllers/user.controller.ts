import type { Request, Response } from "express";
import User from "../models/user.model.ts";
import config from "../configs/config.ts";

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "All required fields must be provided" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const passwordHash = await User.hashPassword(password);
    const user = new User({
      username,
      email,
      password: passwordHash,
    });

    await user.save();
    const { password: _, ...userWithoutPassword } = user.toObject();
    res.status(201).json({
      message: "User registered successfully",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ error: "Failed to register user" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const isMatch = await user.verifyPassword(password);
  if (!isMatch) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = await user.generateToken();

  res.cookie("token", token, {
    httpOnly: true,
    secure: config.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  const { password: _, ...userWithoutPassword } = user.toObject();

  res
    .status(200)
    .json({ message: "Login successful", user: userWithoutPassword });
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logout successful" });
};

export const profile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch profile" });
  }
};

export const getUserByUsername = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username }).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch user" });
  }
};
