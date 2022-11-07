import { Router } from 'express';
import {
  addCaughtPokemon,
  searchCaughtPokemons,
} from '../controllers/CaughtPokemons.controller';

const router = Router();

router.post('/', addCaughtPokemon);
router.get('/', searchCaughtPokemons);

export default router;
