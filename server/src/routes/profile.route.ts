import express from "express";
import { profile } from "../controllers/user.controller.ts";
import { authenticate } from "../middlewares/auth.middleware.ts";
import { getUserByUsername } from "../controllers/user.controller.ts";

const profileRoute = express.Router();

profileRoute.get("/", authenticate, profile);
profileRoute.get("/:username", getUserByUsername);

export default profileRoute;
