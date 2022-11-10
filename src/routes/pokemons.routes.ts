import { Router } from 'express';
import {
  searchPokemons,
  getPokemon,
  updatePokemonsFromPokeApi,
} from '../controllers/Pokemons.controller';

const router = Router();
router.get('/', searchPokemons);
router.get('/:id', getPokemon);
router.get('/update', updatePokemonsFromPokeApi);

export default router;
