import express from "express";
import indexRoute from "./routes/index.route";
import cookieParser from "cookie-parser";
import config from "./configs/config";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    origin: config.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use("/api", indexRoute);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello 😎");
});

export default app;
