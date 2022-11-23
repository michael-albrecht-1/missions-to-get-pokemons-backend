import { Schema, model } from 'mongoose';
import { Pokemon } from './pokemon.model';

const pokemonSchema = new Schema<Pokemon>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  types: { type: Array, required: true },
});

export const PokemonsModel = model('pokemons', pokemonSchema);
