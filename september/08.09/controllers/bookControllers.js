const { Author, Book } = require("../model/authorModel");
const mongoose = require("mongoose");
const getAll = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getOneByID = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    res.status(200).json(author);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const deleteOneByID = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    res.status(200).json(author);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// localhost: 3000 
const addBooks = async (req, res) => {
  Author.findById(req.params.id)
    .then((author) => {
      const book 0 new Book({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        author: req.param.id, // get the _id from the author 

      });
      book.save();

    })
}

module.exports = {
  getAll,
  getOneByID,
  deleteOneByID,
};