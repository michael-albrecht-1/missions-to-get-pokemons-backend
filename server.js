const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  process.env.SOURCE_MONGO_PROD,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
  },
  (err) => {
    if (!err) console.log("Mongodb local connected");
    else console.log("Connection Mongodb local error" + err);
  }
);
const caughtPokemonsRoutes = require("./routes/caughtPokemons.routes");
const missionsRoutes = require("./routes/missions.routes");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use("/caughtPokemons", caughtPokemonsRoutes);
app.use("/missions", missionsRoutes);

app.listen(5500, () => console.log("Server started: 5500"));
