const mongoose = require("mongoose");
const { time } = require("faker");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  quantity: {
    type: Number,
    required: true,
  },
  records: [{ ref: "records", type: mongoose.Schema.Types.ObjectId }],
  user: { ref: "users", type: mongoose.Schema.Types.ObjectId }
});

module.exports = mongoose.model("orders", OrderSchema);