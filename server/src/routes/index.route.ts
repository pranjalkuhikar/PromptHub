import express from "express";
import userRouter from "./user.route.ts";
import profileRoute from "./profile.route.ts";

const indexRoute = express.Router();

indexRoute.use("/auth", userRouter);
indexRoute.use("/profile", profileRoute);

export default indexRoute;
