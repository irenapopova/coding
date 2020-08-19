const express = require("express");
// starting the express server
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
// to process the json data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
// mongoDB 

const mongoose = require("mongoose");
mongoose
// to connect with .env variables , PORT
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  .then(console.log('DB is connected'))
      .catch(error)=> {
    console.log(`There was a problem ${error.message}`);
  });
app.use(express.json());
// router 
const employees = require("./router/employees");

app.use("/employees",employees): // the last is which file will handle it

module.exports = app;
