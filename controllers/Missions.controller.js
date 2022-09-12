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

      updatedMission = { ...data._doc, status: "done" };
      return res.send(updatedMission);
    })
    .catch((err) => res.status(500).send({ message: err }));

  console.warn(updatedMission);
  const stringRewards = updatedMission?.rewards;
  if (!stringRewards) {
    return console.error("No rewards !");
  }
  const rewards = JSON.parse(stringRewards);

  rewards.forEach(async (reward) => {
    const newRecord = new CaughtPokemonsModel({
      number: reward.number,
      name: reward.name,
    });

    const caughtPokemon = await newRecord.save();

    console.warn(caughtPokemon);
  });
};
