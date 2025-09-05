import express from "express";
import {
  getAllPrompt,
  getPromptById,
  createPrompt,
  updatePrompt,
  deletePrompt,
} from "../controllers/prompt.controller.ts";
import { authenticate } from "../middlewares/auth.middleware.ts";

const promptRoute = express.Router();

promptRoute.get("/", getAllPrompt);
promptRoute.get("/:id", getPromptById);
promptRoute.post("/", authenticate, createPrompt);
promptRoute.put("/:id", authenticate, updatePrompt);
promptRoute.delete("/:id", authenticate, deletePrompt);

export default promptRoute;
