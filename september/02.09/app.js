const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));

const mongoose = require("mongoose");
// to process the json data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
const userModel = require("./models/user");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });

  app.get("/", async(req,res) =>{

  });
  app.post("/" async(req,res) =>{
    
  })

module.exports = app;