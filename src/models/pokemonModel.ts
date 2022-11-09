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

export interface PokemonDTO {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: any[];
  held_items: any[];
  location_area_encounters: string;
  moves: any[];
  species: any;
  sprites: PokemonSpritesDTO;
  stats: any[];
  types: any[];
  past_types: any[];
}

export interface PokemonSpritesDTO {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}
