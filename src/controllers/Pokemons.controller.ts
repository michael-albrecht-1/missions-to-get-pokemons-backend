import { Handler } from 'express';
import { PokemonsModel } from '../models/pokemonModel';

export const searchPokemons: Handler = (req, res) => {
  PokemonsModel.find((err, docs) => {
    if (!err) {
      res.json(
        docs
          .map((doc) => {
            return {
              id: doc.id,
              name: doc.name,
              height: doc.height,
              weight: doc.weight,
              types: doc.types,
            };
          })
          .reverse()
      );
    } else console.error('error to get missions');
  });
};
