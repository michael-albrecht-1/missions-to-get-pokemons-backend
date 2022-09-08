const mongoose = require("mongoose");

const MissionsModel = mongoose.model("missions", {
  uuid: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  rewards: { type: String, required: false },
  status: {
    type: String,
    enum: ["created", "done", "expired"],
    required: true,
  },
  dateCreation: { type: Date, default: Date.now },
});

module.exports = { MissionsModel };
