import { Router } from 'express';
import {
  searchPokemons,
  getPokemon,
  updatePokemonsFromPokeApi,
} from '../controllers/Pokemons.controller';
import { pokemonSearchValidator } from '../middlewares/pokemonSearchValidator.middleware';

const router = Router();
router.get('/', pokemonSearchValidator, searchPokemons);
router.get('/update', updatePokemonsFromPokeApi);
router.get('/:id', getPokemon);

export default router;
