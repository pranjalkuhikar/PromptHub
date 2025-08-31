import express from "express";

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello bhai! Server chal raha hai 123 😎");
});

export default app;
