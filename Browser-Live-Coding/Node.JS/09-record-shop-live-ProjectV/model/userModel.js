const mongoose = require("mongoose")
const AddressSchema = require("./addressSchema")
const Schema = mongoose.Schema;

//definining our schema
/* User is a instance from Schema Class */
const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: AddressSchema
})

/* creating/exporting our users Model */
/* mongoose.model(<Collection>,<Document>) */
module.exports = mongoose.model("users", UserSchema) //model