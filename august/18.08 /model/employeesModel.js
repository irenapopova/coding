// here I call MONGOOSE AND CREATE A MODEL 
const mongoose = require("mongoose");
// CREATING A MODEL / Schema is how should look and have inside the MongoDB DATABASE
const employeesDataSchema = new mongoose.Schema({
  // I am specifying the database: name, age, address, 
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  add: String,
  employeeAddedDate: { // THIS IS AN OBJECT which defined the required properties 
    type: Date,
    required: true,
    default: Date.now,
  },
});
// create new collection
// module.exports = mongoose.model(
//   "EmployeesData",
//   employeesDataSchema
// );
// work on collection that we have
module.exports = mongoose.model(
  "EmployeesData",
  employeesDataSchema,
  "EmployeesData"
);

// in compass every document inside is a collection ,
// the collection is the employees data ,
// every document inside the collecton , every use 
// everything inside EmployeesData in Compass is a DOCUMENT , SO IN EMPLOYEES data I have two documents, 