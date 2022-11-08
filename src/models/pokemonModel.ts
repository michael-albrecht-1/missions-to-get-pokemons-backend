import { Schema, model } from 'mongoose';

export const PokemonsModel = model(
  'pokemons',
  new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    base_experience: { type: Number, required: true },
    height: { type: Number, required: true },
    is_default: { type: Boolean, required: true },
    order: { type: Number, required: true },
    weight: { type: Number, required: true },
    abilities: { type: Array, required: true },
    held_items: { type: Array, required: true },
    location_area_encounters: { type: String, required: true },
    moves: { type: Array, required: true },
    species: { type: String, required: true },
    sprites: { type: Object, required: true },
    stats: { type: String, required: true },
    types: { type: Array, required: true },
    past_types: { type: Object, required: true },
  })
);

interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}
