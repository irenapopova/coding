const express = require('express');
const mongoose = require('mongoose');
const booksRoute = require('./routes/booksRoute')


const app = express();

app.get("/", (req, res) => {
  res.send("hello")
})
// dividing the route 
app.use("/books", booksRoute)




app.listen(3000, () => {
  console.log('server is running')
});