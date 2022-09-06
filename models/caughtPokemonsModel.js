const mongoose = require("mongoose");

const CaughtPokemonsModel = mongoose.model("caughtPokemons", {
  number: { type: String, required: true },
  name: { type: String, required: true },
  dateCreation: { type: Date, default: Date.now },
});

module.exports = { CaughtPokemonsModel };
