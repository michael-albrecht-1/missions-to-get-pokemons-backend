import express from 'express';
import caughtPokemonsRoutes from './routes/caughtPokemons.routes';
import missionsRoutes from './routes/missions.routes';
import pokemonsRoutes from './routes/pokemons.routes';
import cors from 'cors';
import 'isomorphic-fetch';

import '../config/dbConfig';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/caughtPokemons', caughtPokemonsRoutes);
app.use('/missions', missionsRoutes);
app.use('/pokemons', pokemonsRoutes);

app.listen(5500, () => console.log('Server started: 5500'));
