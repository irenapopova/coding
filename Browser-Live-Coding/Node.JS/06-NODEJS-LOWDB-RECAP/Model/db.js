const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
//create a json file
const adopter = new FileSync("./Model/db.json");
const db = lowdb(adopter);


module.exports = db