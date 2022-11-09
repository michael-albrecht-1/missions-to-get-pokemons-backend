import { Router } from 'express';
import {
  searchPokemons,
  updatePokemonsFromPokeApi,
} from '../controllers/Pokemons.controller';

const router = Router();
router.get('/', searchPokemons);
router.get('/update', updatePokemonsFromPokeApi);

export default router;
