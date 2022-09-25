const router = require("express").Router();
const caughtPokemonsController = require("../controllers/CaughtPokemons.controller");

router.post("/", caughtPokemonsController.addCaughtPokemon);
router.get("/", caughtPokemonsController.searchCaughtPokemons);

module.exports = router;
