import express from "express";
import { profile } from "../controllers/user.controller.ts";

const profileRoute = express.Router();

profileRoute.get("/", profile);

export default profileRoute;
