const router = require("express").Router();
const caughtPokemonsController = require("../controllers/caughtPokemons.controller");

router.post("/", caughtPokemonsController.addCaughtPokemon);
router.get("/", caughtPokemonsController.searchCaughtPokemons);

module.exports = router;
