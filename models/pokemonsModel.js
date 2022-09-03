const mongoose = require("mongoose");

const PokemonsModel = mongoose.model("pokedex", {
  number: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  avatar: { type: String, required: true },
  dateCreation: { type: Date, default: Date.now },
});

module.exports = { PokemonsModel };
