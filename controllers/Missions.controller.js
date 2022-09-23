const { CaughtPokemonsModel } = require("../models/caughtPokemonsModel");
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
        docs
          .map((doc) => ({
            uuid: doc.uuid,
            title: doc.title,
            description: doc.description,
            rewards: JSON.parse(doc.rewards),
            status: doc.status,
            dateCreation: doc.dateCreation,
          }))
          .reverse()
      );
    } else console.error("error to get missions");
  });
};

module.exports.completeMission = async (req, res) => {
  let updatedMission = undefined;
  await MissionsModel.findOneAndUpdate(
    {
      uuid: req.params.id,
    },

    {
      status: "done",
    }
  )
    .then((data) => {
      if (!data) {
        return res.status(400).send("Mission not found !");
      }

      if (data.status === "done") {
        return res.status(403).send("Mission already complete !");
      }

      updatedMission = {
        ...data._doc,
        rewards: JSON.parse(data._doc.rewards),
        status: "done",
      };
      return res.json(updatedMission);
    })
    .catch((err) => res.status(500).send({ message: err }));

  if (!updatedMission.rewards) {
    return console.error("No rewards !");
  }

  updatedMission.rewards.forEach(async (reward) => {
    const newRecord = new CaughtPokemonsModel({
      number: reward.number,
      name: reward.name,
    });

    newRecord.save();
  });
};
