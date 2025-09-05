import mongoose from "mongoose";

const promptSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  tags: { type: [String], required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Prompt = mongoose.model("Prompt", promptSchema);
export default Prompt;
