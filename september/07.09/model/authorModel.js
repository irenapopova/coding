const mongoose = require("mongoose");
// Today subDocs
const bookSchema = new mongoose.Schema({
  _id: false,
  title: String,
  issueYear: Number,
});
// the main schema and with the code below I connect with the above bookSchema
const authorSchema = new mongoose.Schema({
  authorName: String,
  books: [bookSchema], // connection with the above
});
module.exports = mongoose.model("author", authorSchema);

