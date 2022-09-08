const express = require("express");
const router = express.Router();

const { CaughtPokemonsModel } = require("../models/caughtPokemonsModel");

router.post("/", (req, res) => {
  const newRecord = new CaughtPokemonsModel({
    number: req.body.number,
    name: req.body.name,
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.error("add caught pokemon failed" + err);
  });
});

router.get("/", (req, res) => {
  CaughtPokemonsModel.find((err, docs) => {
    if (!err) res.json(docs);
    else console.error("error to get caught pokemons");
  });
});

module.exports = router;
