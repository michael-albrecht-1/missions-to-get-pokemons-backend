import { Schema, model } from 'mongoose';

interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
}

interface PokemonType {
  slot: number;
  type: { name: string; url: string };
}

export const PokemonsModel = model(
  'pokemons',
  new Schema<Pokemon>({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    types: { type: Array<PokemonType[]>, required: true },
  })
);
