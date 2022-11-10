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
    } else console.error('error to get pokemons');
  });
};

export const getPokemon: Handler = async (req, res) => {
  try {
    const data = await PokemonsModel.findOne({
      id: req.params.id,
    });

    res.json(data);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

export const updatePokemonsFromPokeApi: Handler = async (req, res) => {
  const pokemons: PokemonPokeApiDTO[] = await getPokemonsFromPokeApi();

  //! TODO drop le contenu de la collection avant d'importer la liste
  pokemons.map((p: PokemonPokeApiDTO) => {
    const newRecord = new PokemonsModel({
      id: p.id,
      name: p.name,
      height: p.height,
      weight: p.weight,
      types: p.types,
    });

    newRecord.save();
  });

  res.status(200).send('Pokemons import sucess !');
};

const getPokemonsFromPokeApi = async (): Promise<PokemonPokeApiDTO[]> => {
  const pokemonCount = 649;
  let pokemons: PokemonPokeApiDTO[] = [];
  for (let i = 1; i <= pokemonCount; i++) {
    const pokemon: PokemonPokeApiDTO = await getPokemonFromPokeApi(i);
    pokemons = [...pokemons, pokemon];
  }

  return pokemons;
};

const getPokemonFromPokeApi = async (
  num: number
): Promise<PokemonPokeApiDTO> => {
  const url = 'https://pokeapi.co/api/v2/pokemon/' + num.toString();

  const res = await fetch(url);

  return res.json() as Promise<PokemonPokeApiDTO>;
};

interface PokemonPokeApiDTO {
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
  sprites: PokemonPokeApiSpritesDTO;
  stats: any[];
  types: any[];
  past_types: any[];
}

export interface PokemonPokeApiSpritesDTO {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}
