import { Router } from 'express';
import { searchPokemons } from '../controllers/Pokemons.controller';

const router = Router();
router.get('/', searchPokemons);

export default router;
