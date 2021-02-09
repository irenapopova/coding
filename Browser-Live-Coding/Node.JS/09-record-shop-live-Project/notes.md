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


records/:id -> a GET that will return a record based on the id
records/:id -> a PUT that will update a record based on the id
records/:id -> a DELETE that will delete a record based on the id
create endpoints for the users and orders models. A user should contain a first name, a last name, an email, a password. An order should contain a record id and a quantity property. 

more properties

Users Model
users -> GET all users
users/:id -> GET a user
users -> POST a user
users/:id -> PUT a user
users/:id -> DELETE a user
Orders Model
orders -> GET all orders
orders/:id -> GET an order
orders -> POST an order
orders/:id -> PUT an order
orders/:id -> DELETE an order


What is Database?
What is DBMS?
What is SQL?
What is RDBMS?
SQL Query Command
Working with MySql

TODO:
MongoDB Intro.
Advantages and Disadvantages.
Relational databases VS Non relational databases.
Installation of MongoDB Shell.
MongoDB shell commands.

Task 04 - Mongoose and Seeding
In this task we will introduce Mongoose. Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB. We will learn how to setup Mongoose and how to connect it with our app. We will create our user models and schemas and define exactly how a record/user/order object will look. The next step will be to create a feed function that will feed our database with some fake data so we will be able to test all our endpoints straight away after initialising our server.
TODO:
Please set up mongoose in your server.
Create a data schema and a model for our records, users and orders.
Write a seed script using faker that will run everytime we start our project. If the database is empty, it will feed it some records, orders and users.

TODO:
Recap asynchronous and synchronous code
Recap Promises
Recap Async-await
Write a seed script using faker that will run everytime we start our project. If the database is empty, it will feed it some records, orders and users.

### Task 05 - Mongoose and Controllers

In this task will update our controllers to start communicating with our database. Lowdb is no longer needed, so we will get rid of it's structure. We will dive into Mongoose API and introduce methods that establish communication with our database. Using Mongoose we will read data from the database, insert new records and manipulate already stored data. We will also introduce Robo 3T, a MongoDB GUI that will help us follow what is happening in our database whenever we update something.
TODO:
Please update your record's controller using Mongoose.
Make sure all API endpoints for records work as they should.
Repeat the process for your users and orders controllers.


Task 06 - Validation and Sanitization
In this task we will introduce data validation. How we will we know that the format of the email the user inserted is valid? Using express-validator we will validate our data before we save them in our database. If something is not valid, we will return a detailed error message to the user. After validation, we will sanitize our data using express-validator. Validation is about making sure our data are in the right format. Sanitzation though is all about making sure the data are also noise-free. No extra spaces, no uppercase mixed with lowercase, normalized emails etc.
### TODO
Install express-validator.
Validate data for the user schema.
After validation of the data, please sanitize them as well.
create a custom validation middleware boilerplate and bring all your validators there.

to bundle up the middlewares put them inside an array;
when creating a bandle , put everything inside an array 


#### in validation.js

```js
const { validationResult } = require("express-validator")

const Validation = (rules) => {
  return [
    ...rules,
    //custom middleware
    (req, res, next) => {
      const result = validationResult(req);
      console.log(result);
      if (result.errors.length === 0) {
        next();
      } else {
        let errorObject = new Error();
        let error = result.errors.map((err) => {
          return { [err.param]: err.msg };
        });
        errorObject.message = error;
        next(errorObject);
      }
    },
  ];
};

module.exports = Validation;
```



#### Relation
Relations relation relations. The fact is that MongoDB is a NoSQL database. It means that it is non-relational, among other things. To implement a kind of relations between documents, we use references by IDs or embed documents directly. In the task we will update our code in order to create relations between our models. We can see that an order contains the id of a record but when we retrieve an order we only see the id and not the data of the record as well. We will introduce one to one and one to many relationships between our models and populate data when needed.
Story: Our client, the record store, would like to be able to have the addresses of each user in a spesific format. They would also like to see the data of a record when an order is being retrieved so they can make their shopping cart look nice.
#### TODO
Create a new schema called address containing a street and a city.
Connect the address schema with our user schema (1-to-1).
Update your controlles so when you create/delete/post/retrieve a new user, a new address will be created/deleted/posted/retrieved as well.
Using refs, connect the record schema with the order one (1-to-many).


embedded document is a nested document 
or create references 