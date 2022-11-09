import { Schema, model } from 'mongoose';

export const PokemonsModel = model(
  'pokemons',
  new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    types: { type: Array, required: true },
  })
);
