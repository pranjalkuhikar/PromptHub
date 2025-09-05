import express from "express";
import indexRoute from "./routes/index.route.ts";

const app = express();

app.use("/", indexRoute);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello 😎");
});

export default app;
