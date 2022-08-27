const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require("./models/dbconfig");
const pokemonsRoutes = require("./routes/PokemonsController");
const bodyPaser = require("body-parser");

app.use(bodyParser.json());
app.use("/pokemons", pokemonsRoutes);

app.listen(5500, () => console.log("Server started port 5500"));
