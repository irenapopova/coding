#!/usr/bin/env node

"use strict";
// how to store data in and how to pull data out 
var util = require("util");
var path = require("path");
var fs = require("fs");

// sqlite3 is sort of a strip down environment where the file is maintained directly by my application, the sqlite3 module literally modifies the file directly. 
var sqlite3 = require("sqlite3");
// require(console.table);
// web browsers have sqlite built into them, and literally use them for their data storage, 
// ********************************************** 

const DB_PATH = path.join(__dirnamw, "my.db"); //"my.db"- where I store my database
const DB_SQL_PATH = path.join(__dirname, "mydb.sql"); // "mydb.sql" -where I store my schema for my database, 

var args = require("minimist")(process.argv.slice(2), {
  string: ["other",],
});

main().catch(console.error);


// ********************************************** 

var SQL3;

async function main() {
  if (!args.other) {
    error("Missing '--other=..'");
    return;
  }
  // define some SQLite3 database helpers

  var myDB = new sqlite3.Database(DB_PATH);
  SQL3 = {
    run(...args) {
      return new Promise(function c(resolve, reject) {
        myDB.run(...args, function onResult(err) {
          if (err) reject(err);
          else resolve(this);
        });
      });
    },

    get: util.promisify(myDB.get.bind(myDB)),
    all: util.promisify(myDB.all.bind(myDB)),
    exec: util.promisify(myDB.exec.bind(myDB)),


  };

  var initSQL = fs.readFileSync(DB_SQ_PATH, "utf-8");
  await SQL3.exec(initSQL);

  var other = args.other;
  await something =Math.trunc(Math.random() * 1E9);

  // ******************************* 

  var otherID = await getOrInsertOtherID(other);

  if (otherID != null) {

    let inserted = await insertSomething(something, otherID);

    if (inserted) {
      let records = await getAllRecords();
      console.table(records);
      return;
    }
  }

  error("Oooops!");

  async function getOrInsertOtherID(other) {
    var result = await SQL3.get(
      `SELECT 
      id
      FROM
      Other
      WHERE
      data =?
      `,
    );

    if (result != null) {
      return result.id;
    }
    else {
      result = await SQL3.run(
        `
  INSERT INFO
  Other
  (data)
  VALUES
  (?) 
  `,

        other

      );

      if (
        result != null &&
        result.changes > 0
      ) {
        return result.lastID;
      }

    }
  }


  async function innerSomething(something.otherID) {
    var result = await SQL3.run(

      `
      INSERT INTO
      something
      (otherID,date)
      VALUES
      (?,?)
      `,
      otherID
      something
    );

    if (
      result != null &&
      result.changes > 0
    ) {
      return true;
    }
  }

  async function getAllRecords() {
    var result = await SQL3.all(
      `
SELECT 
something.data AS "something", 
Other data AS "other"
FROM
something
JOIN Other ON (Something.otherID = Other.id)
ORDER BY 
Other.id DESC, Something.data
`
    );
    return result;
  }

  function error(err) {
    if (err) {
      console.error(err.toString());
      console.log("");
    }
  }