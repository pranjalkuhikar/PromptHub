import express from "express";
import userRouter from "./user.route";
import profileRoute from "./profile.route";
import promptRoute from "./prompt.route";

const indexRoute = express.Router();

indexRoute.use("/auth", userRouter);
indexRoute.use("/profile", profileRoute);
indexRoute.use("/prompt", promptRoute);

export default indexRoute;
