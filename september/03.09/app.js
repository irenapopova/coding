const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");

app.use(morgan("dev"));

// to process the json data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

module.exports = app;