import express from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/user.controller.ts";
import { authenticate } from "../middlewares/auth.middleware.ts";

const userRoute = express.Router();

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/logout", logout);
userRoute.get("/profile", authenticate, profile);

export default userRoute;
