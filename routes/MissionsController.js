const express = require("express");
const { MissionsModel } = require("../models/mission.Model");
const router = express.Router();

router.post("/", (req, res) => {
  const newRecord = new MissionsModel({
    uuid: req.body.uuid,
    title: req.body.title,
    description: req.body.description,
    rewards: JSON.stringify(req.body.rewards),
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.error("add mission failed" + err);
  });
});

module.exports = router;
