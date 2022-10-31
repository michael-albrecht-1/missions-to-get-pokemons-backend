import { Handler } from 'express';
import { CaughtPokemonsModel } from "../models/caughtPokemonsModel";
import { MissionsModel } from "../models/mission.Model";

export const createMission: Handler = (req, res) => {
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

export const searchMissions: Handler = (req, res) => {
  MissionsModel.find((err, docs) => {
    if (!err) {
      res.json(
        docs
          .filter((doc) => doc.status === "created")
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

export const completeMission: Handler = async (req, res) => {
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

      const json = data.toJSON();

      updatedMission = {
        ...json,
        rewards: JSON.parse(json.rewards),
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
