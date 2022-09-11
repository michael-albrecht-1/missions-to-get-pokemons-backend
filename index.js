const express = require("express");
const app = express();
require("./models/dbConfig");
const caughtPokemonsRoutes = require("./routes/caughtPokemons.routes");
const missionsRoutes = require("./routes/missions.routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

//mongoose.set("useFindAndModify", false);

app.use(bodyParser.json());
app.use(cors());
app.use("/caughtPokemons", caughtPokemonsRoutes);
app.use("/missions", missionsRoutes);

app.listen(5500, () => console.log("Server started: 5500"));
