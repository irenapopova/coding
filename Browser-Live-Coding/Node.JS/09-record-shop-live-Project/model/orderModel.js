const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  quantity: {
    type: Number,
    required: true,
  },
  record: {
    type: String,
    required: true,
  }

})