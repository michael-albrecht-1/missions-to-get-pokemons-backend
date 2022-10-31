import { Handler } from 'express';
import { CaughtPokemonsModel } from '../models/caughtPokemonsModel';

export const addCaughtPokemon: Handler = (req, res) => {
  const newRecord = new CaughtPokemonsModel({
    number: req.body.number,
    name: req.body.name,
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.error("add caught pokemon failed" + err);
  });
};

export const searchCaughtPokemons: Handler = (_, res) => {
  CaughtPokemonsModel.find((err, docs) => {
    if (!err) res.json(docs);
    else console.error("error to get caught pokemons");
  });
};
