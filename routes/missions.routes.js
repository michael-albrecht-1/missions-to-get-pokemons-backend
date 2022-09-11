const router = require("express").Router();
const missionsController = require("../controllers/missions.controller");

router.post("/", missionsController.createMission);
router.get("/", missionsController.searchMissions);
router.patch("/complete/:id", missionsController.completeMission);

module.exports = router;