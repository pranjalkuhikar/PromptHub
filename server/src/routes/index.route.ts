import express from "express";
import userRouter from "./user.route.ts";

const indexRoute = express.Router();

indexRoute.use("/user", userRouter);

export default indexRoute;
