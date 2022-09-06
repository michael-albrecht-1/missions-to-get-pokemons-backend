const express = require("express");
const { MissionsModel } = require("../models/mission.Model");
const router = express.Router();

router.post("/", (req, res) => {
  const newRecord = new MissionsModel({
    uuid: req.body.uuid,
    title: req.body.title,
    description: req.body.description,
    rewards: JSON.stringify(req.body.rewards),
    status: "created",
  });

  newRecord.save((err, docs) => {
    if (!err) res.json(docs);
    else {
      console.error("add mission failed : " + err);
      res.status(400).send(err);
    }
  });
});

router.get("/", (req, res) => {
  MissionsModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.error("error to get missions");
  });
});

module.exports = router;
