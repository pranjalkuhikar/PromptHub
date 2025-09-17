import express from "express";
import {
  getAllPrompt,
  getPromptById,
  createPrompt,
  updatePrompt,
  deletePrompt,
  getUserPrompts,
} from "../controllers/prompt.controller";
import { authenticate } from "../middlewares/auth.middleware";

const promptRoute = express.Router();

promptRoute.get("/", getAllPrompt);
promptRoute.get("/user", authenticate, getUserPrompts);
promptRoute.get("/:id", getPromptById);
promptRoute.post("/create", authenticate, createPrompt);
promptRoute.put("/update/:id", authenticate, updatePrompt);
promptRoute.delete("/delete/:id", authenticate, deletePrompt);

export default promptRoute;
