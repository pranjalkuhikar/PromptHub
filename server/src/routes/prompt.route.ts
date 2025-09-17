import express from "express";
import {
  getAllPrompt,
  getPromptById,
  createPrompt,
  updatePrompt,
  deletePrompt,
  getUserPrompts,
} from "../controllers/prompt.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const promptRoute = express.Router();

promptRoute.get("/", getAllPrompt);
promptRoute.get("/user", authenticate, getUserPrompts);
promptRoute.get("/:id", getPromptById);
promptRoute.post("/create", authenticate, createPrompt);
promptRoute.put("/update/:id", authenticate, updatePrompt);
promptRoute.delete("/delete/:id", authenticate, deletePrompt);

export default promptRoute;
