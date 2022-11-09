import { Handler } from 'express';
import { PokemonDTO, PokemonsModel } from '../models/pokemonModel';

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

export const updatePokemonsFromPokeApi: Handler = async (req, res) => {
  const pokemons: PokemonDTO[] = await getPokemons();

  pokemons.map((p: PokemonDTO) => {
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

const getPokemons = async (): Promise<PokemonDTO[]> => {
  const pokemonCount = 649;
  let pokemons: PokemonDTO[] = [];
  for (let i = 1; i <= pokemonCount; i++) {
    const pokemon: PokemonDTO = await getPokemon(i);
    pokemons = [...pokemons, pokemon];
  }

  return pokemons;
};

const getPokemon = async (num: number): Promise<PokemonDTO> => {
  const url = 'https://pokeapi.co/api/v2/pokemon/' + num.toString();

  const res = await fetch(url);

  return res.json() as Promise<PokemonDTO>;
};
