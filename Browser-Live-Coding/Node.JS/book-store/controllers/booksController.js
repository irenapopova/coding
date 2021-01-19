exports.getBooks = (req, res) => {
  res.send("here are all the books")


}

exports.getOneBook = (req, res) => {
  res.send(`Book:${req.params.id} `)
}