const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./model/db.json')
const db = low(adapter)

// Set some defaults
/* db.defaults({ records: [] })
  .write() */


module.exports = db