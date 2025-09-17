import express from "express";
import { profile } from "../controllers/user.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const profileRoute = express.Router();

profileRoute.get("/", authenticate, profile);

export default profileRoute;
