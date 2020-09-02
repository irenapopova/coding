const mongoose = require("mongoose");
const fakerSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: String,
  city: String,
});

module.exports = mongoose.model("fakerCollection", fakerSchema);