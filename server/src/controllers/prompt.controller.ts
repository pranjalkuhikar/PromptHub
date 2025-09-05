import type { Request, Response } from "express";
import Prompt from "../models/prompt.model.ts";

export const getAllPrompt = async (req: Request, res: Response) => {
  try {
    const prompt = await Prompt.find();
    res.status(200).json(prompt);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getPromptById = async (req: Request, res: Response) => {
  try {
    const prompt = await Prompt.findById(req.params.id);
    if (!prompt) {
      return res.status(404).json({ message: "Prompt not found" });
    }
    res.status(200).json(prompt);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createPrompt = async (req: Request, res: Response) => {
  try {
    const { text, tags } = req.body;
    if (!text || !tags) {
      return res.status(400).json({ message: "Text and tags are required" });
    }
    const prompt = new Prompt({
      prompt: text,
      tags,
      userId: (req as any).user?.id,
    });
    await prompt.save();
    res.status(201).json(prompt);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updatePrompt = async (req: Request, res: Response) => {
  try {
    const prompt = await Prompt.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!prompt) {
      return res.status(404).json({ message: "Prompt not found" });
    }
    res.status(200).json(prompt);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deletePrompt = async (req: Request, res: Response) => {
  try {
    const prompt = await Prompt.findByIdAndDelete(req.params.id);
    if (!prompt) {
      return res.status(404).json({ message: "Prompt not found" });
    }
    res.status(200).json({ message: "Prompt deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
