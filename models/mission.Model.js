const mongoose = require("mongoose");

const MissionsModel = mongoose.model("missions", {
  uuid: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  rewards: { type: String, required: false },
});

module.exports = { MissionsModel };
