const mongoose = require("mongoose");
// const environment = require("./environments/environment");
const SOURCES = require("../sources");

mongoose.connect(
  process.env[SOURCES.mongoProd],
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
