const express = require("express");
const { MissionsModel } = require("../models/mission.Model");
const router = express.Router();

router.post("/", (req, res) => {
  const newRecord = new MissionsModel({
    uuid: req.body.uuid,
    title: req.body.title,
    description: req.body.description,
    reward: req.body.reward,
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else {
      console.error("add mission failed : " + err);
      res.status(400).send(err);
    }
  });
});

module.exports = router;
