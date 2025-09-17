import type { Request, Response } from "express";
import Prompt from "../models/prompt.model.js";

export const getAllPrompt = async (req: Request, res: Response) => {
  try {
    const prompt = await Prompt.find().populate({
      path: "userId",
      select: "-password",
    });
    res.status(200).json(prompt);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getPromptById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const prompt = await Prompt.findById(id);

    if (!prompt) {
      return res.status(404).json({ message: "Prompt not found" });
    }
    res.status(200).json(prompt);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserPrompts = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const prompts = await Prompt.find({ userId }).populate({
      path: "userId",
      select: "-password",
    });
    res.status(200).json(prompts);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createPrompt = async (req: Request, res: Response) => {
  try {
    const { prompt, tags } = req.body;
    if (!prompt || !tags) {
      return res.status(400).json({ message: "Prompt and tags are required" });
    }
    const prompts = new Prompt({
      prompt,
      tags,
      userId: (req as any).user?.id,
    });
    await prompts.save();
    res.status(201).json(prompts);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updatePrompt = async (req: Request, res: Response) => {
  try {
    const prompt = await Prompt.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!prompt) {
      return res.status(404).json({ message: "Prompt not found" });
    }

    return res.status(200).json(prompt);
  } catch (error) {
    console.error("Update error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deletePrompt = async (req: Request, res: Response) => {
  try {
    const prompt = await Prompt.findById(req.params.id);

    if (!prompt) {
      return res.status(404).json({ message: "Prompt not found" });
    }

    if (prompt.userId.toString() !== (req as any).user.id) {
      return res
        .status(403)
        .json({ message: "Unauthorized to delete this prompt" });
    }

    await Prompt.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Prompt deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
