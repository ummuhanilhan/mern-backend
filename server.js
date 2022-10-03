const express = require("express");
require("dotenv").config();
const notRoute = require("./routes/notlar");
const mongoose = require("mongoose");
const app = express();

app.use((req, res, next) => {
  console.log("(req.path, req.method)");
  next();
});

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)

  .then(() => {
    console.log("MongoDB connected");

    app.listen(process.env.PORT, () => {
        console.log(`${process.env.PORT} portunda server çalışıyor`);
      })

    
  })
  .catch(err=> {
    console.log(err);
  });

app.use("/api/notlar", notRoute);
