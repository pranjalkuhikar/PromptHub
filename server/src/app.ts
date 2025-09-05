import express from "express";
import indexRoute from "./routes/index.route.ts";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use("/api", indexRoute);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello 😎");
});

export default app;
