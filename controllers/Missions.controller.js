const { MissionsModel } = require("../models/mission.Model");

module.exports.createMission = (req, res) => {
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
};

module.exports.searchMissions = (req, res) => {
  MissionsModel.find((err, docs) => {
    if (!err) {
      res.json(
        docs.map((doc) => ({
          uuid: doc.uuid,
          title: doc.title,
          description: doc.description,
          rewards: JSON.parse(doc.rewards),
          status: doc.status,
          dateCreation: doc.dateCreation,
        }))
      );
    } else console.error("error to get missions");
  });
};
