// npm i express
// npm i lowdb

// express
const express = require("express");
const app = express();
const port = 3000;
//lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const jsonFile = new FileSync("db.json");
const db = low(jsonFile);

app.listen(port, () => {
  console.log(`server listen on http://localhost:${port}`);
});

