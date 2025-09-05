import express from "express";
import userRouter from "./user.route.ts";

const indexRoute = express.Router();

indexRoute.use("/auth", userRouter);

export default indexRoute;
