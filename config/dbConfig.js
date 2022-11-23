const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
  },
  (err) => {
    if (!err) console.log("Mongodb connected");
    else console.log("Connection Mongodb error" + err);
  }
);
