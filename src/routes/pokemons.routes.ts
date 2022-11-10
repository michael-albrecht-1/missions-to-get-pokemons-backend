import { Router } from 'express';
import {
  searchPokemons,
  getPokemon,
  updatePokemonsFromPokeApi,
} from '../controllers/Pokemons.controller';

const router = Router();
router.get('/', searchPokemons);
router.get('/update', updatePokemonsFromPokeApi);
router.get('/:id', getPokemon);

export default router;
