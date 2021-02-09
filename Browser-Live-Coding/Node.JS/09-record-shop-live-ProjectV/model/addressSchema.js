const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
});


module.exports = AddressSchema;