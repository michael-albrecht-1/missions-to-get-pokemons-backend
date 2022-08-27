const express = require("express");
const app = express();
require("./models/dbconfig");
const pokemonsRoutes = require("./routes/PokemonsController");

app.use("/pokemons", pokemonsRoutes);

app.listen(5500, () => console.log("Server started port 5500"));
