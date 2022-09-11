const { CaughtPokemonsModel } = require("../models/caughtPokemonsModel");

module.exports.addCaughtPokemon = (req, res) => {
  const newRecord = new CaughtPokemonsModel({
    number: req.body.number,
    name: req.body.name,
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.error("add caught pokemon failed" + err);
  });
};

module.exports.searchCaughtPokemons = (req, res) => {
  CaughtPokemonsModel.find((err, docs) => {
    if (!err) res.json(docs);
    else console.error("error to get caught pokemons");
  });
};
