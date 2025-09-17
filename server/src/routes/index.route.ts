import express from "express";
import userRouter from "./user.route.js";
import profileRoute from "./profile.route.js";
import promptRoute from "./prompt.route.js";

const indexRoute = express.Router();

indexRoute.use("/auth", userRouter);
indexRoute.use("/profile", profileRoute);
indexRoute.use("/prompt", promptRoute);

export default indexRoute;
