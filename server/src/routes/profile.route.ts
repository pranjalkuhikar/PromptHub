import express from "express";
import { profile } from "../controllers/user.controller.ts";
import { authenticate } from "../middlewares/auth.middleware.ts";

const profileRoute = express.Router();

profileRoute.get("/", profile);

export default profileRoute;
