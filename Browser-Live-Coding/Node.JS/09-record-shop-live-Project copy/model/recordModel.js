const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
});

/* const Records = mongoose.model('records', RecordSchema) 
module.export=Records
*/
module.exports = mongoose.model("records", RecordSchema)