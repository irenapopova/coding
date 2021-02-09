### installing mongo on MAC via terminal 

```bash
brew update 
brew install mongodb 
brew tap mongodb/brew 
brew install mongodb-community@4.4 
brew services start mongodb-community@4.4 

```
a model is like a map for the database , to deal with the objects 

a collection of json objects 
the controller sends the data to the view and view displays it 

schema is the set of rules that tell the database 

Mongoose is an Object Data Modeling (ODM

seeds.js
```js
// importing mongoose 
const mongoose = require("mongoose")
const UserData = require("../model/usersModel"); // models
const faker = require("faker");

``
// connect the application with mongoDB 
mongoose.connect("mongodb://127.0.0.1:27017/new-record-shop", { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("database connect"))

// open/connect 
// listening for event - open means connect 
mongoose.connection.on("open", () => {
  console.log("connection established")
})

// error/ connection error  
// listening for event 
mongoose.connection.on("error", () => {
  console.log("Error found while connection")
})

// delete all users from users collection 
function purge() {
  UserData.deleteMany({})
}
purge()
// perform  different operations with MongoDB
const users = Array(10)
  .fill(null)
  .map(() =>{
    const user = new UserData({

    })
  })


const user = new UserData({
  firstName: "Irene",
  lastName: "Popova",
  email: "irene_popova@gmail.com",
  password: "123"
})

// asynchronous code 
// store this user in Database
user.save().then(() => {
  console.log('')
  //store the user in database and close the connection
  mongoose.connection.close()
})






// close mongoDB connection 
// synchronous code 
```