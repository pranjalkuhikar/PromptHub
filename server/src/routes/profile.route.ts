import express from "express";
import { profile } from "../controllers/user.controller";
import { authenticate } from "../middlewares/auth.middleware";

const profileRoute = express.Router();

profileRoute.get("/", authenticate, profile);

export default profileRoute;
