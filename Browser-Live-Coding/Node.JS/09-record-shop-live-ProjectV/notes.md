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

Task 08 - Authentication
Our app works well up until now but it's not secure at all at the moment. Anybody can delete another users account using their id, passwords are not hashed so they are easy to be compromised and there is no authentication taking place anywhere. We will set up a way to authenticate each call using Json Web Tokens, so each user can manage only information created by them. We will also introduce roles for our users. We will have an admin role and a client role and their priviledges should be like the following:
Admin Role
Records
POST/GET/PUT/DELETE.
Users
POST/GET/PUT/DELETE.
Orders
POST/GET/PUT/DELETE.
Client Role
Records
GET.
Users
POST/GET/PUT/DELETE.
Orders
POST/GET/PUT/DELETE.
TODO
Return a token everytime a user is created.
Write a middleware to authenticate all endpoints of our app using the token above.
Hash the password while user creation and login.
Write a middleware that will validate users based on their roles.

encryption.js
```js
const bcrypt = require(("bcrypt"))

/**create hash password */
bcrypt.hash()

/**match password */
bcrypt.compare()

exports.encrypt = async (text,) => {
  if (!text) return "";

  let hashPassword = await bcrypt.hash(text, 10)
  return hashPassword;
}
```

encrypton.js - second method

```js
const bcrypt = require(("bcrypt"))

/**create hash password */
bcrypt.hash()

/**match password */
bcrypt.compare()

exports.encrypt = async (text,hashedpassword) => {
  if (!text) return "";

  let valid = await bcrypt.compare(text, hashpassword)
  return valid;
}
```