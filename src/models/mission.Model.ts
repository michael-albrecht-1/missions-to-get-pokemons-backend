import { Schema, model } from 'mongoose';

export const MissionsModel = model("missions", new Schema({
  uuid: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  rewards: { type: String, required: true },
  status: {
    type: String,
    enum: ["created", "done", "expired"],
    required: true,
  },
  dateCreation: { type: Date, default: Date.now },
}));
