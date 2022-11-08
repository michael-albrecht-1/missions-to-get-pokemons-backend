import express from 'express';
import caughtPokemonsRoutes from './routes/caughtPokemons.routes';
import missionsRoutes from './routes/missions.routes';
import pokemonsRoutes from './routes/pokemons.routes';
import bodyParser from 'body-parser';
import cors from 'cors';

import '../config/dbConfig';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/caughtPokemons', caughtPokemonsRoutes);
app.use('/missions', missionsRoutes);
app.use('/pokemons', pokemonsRoutes);

app.listen(5500, () => console.log('Server started: 5500'));
