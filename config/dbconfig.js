const mongoose = require("mongoose");
require("dotenv").config();

const connexion = mongoose.connect(
  process.env.SOURCE_MONGO_PROD,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
  },
  (err) => {
    if (!err) console.log("Mongodb local connected");
    else console.log("Connection Mongodb local error" + err);
  }
);

module.exports = connexion;

/*
SOURCE_MONGO_PROD;
SOURCE_MONGO_TEST;
SOURCE_MONGO_LOCAL;
*/
