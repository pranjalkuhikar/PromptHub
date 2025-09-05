import express from "express";
import { register, login, logout } from "../controllers/user.controller.ts";

const userRoute = express.Router();

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/logout", logout);

export default userRoute;
