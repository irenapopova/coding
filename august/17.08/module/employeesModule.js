const mongoose = require("mongoose");
// my own schema is called employee data
const employeeDataSchema = new mongoose.Schema({
  // creating an object 
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  // passing what type 
  address: String,
  employeeAddressDate: {
    type: String,
    required: true,
    default: Data.now,
  },

});

module.exports = mongoose.model("employeesData", employeesDataSchema);