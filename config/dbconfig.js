const mongoose = require("mongoose");
const environment = require("./environments/environment");

console.warn(environment);
mongoose.connect(
  environment.source,
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
