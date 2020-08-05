// npm i express
// npm i lowdb

// express
const express = require("express");
const app = express();

// lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const jsonFile = new FileSync("db.json");
const db = low(jsonFile);

// to process json data
const 



// db init
app.get("/new", async (req, res) => {
  await db.defaults({ articles: [], user: {}, num: 1 }).write();
  res.send("New db being init");
});

// adding new
app.get("/add", async (req, res) => {
  //  url      /add?id=1&title=1+like+water
  const id = req.query.id;
  const title = req.query.title;
  await db.get("articles").push({ id: id, title: title }).write();
  res.send(`New data being entered with id = ${id} and title = ${title}`);
});
// look up
app.get("/find", async (req, res) => {
  // url    /find?id=1
  const idToFind = req.query.id;
  res.send(await db.get("articles").find({ id: idToFind }).value());
});

// update
app.get("/update", async (req, res) => {
  await db.update("num", (n) => n + 1).write();
  const num = db.get("num").value();
  res.send(`num was increased by one, now num is = ${num}`);
});

// user name
app.get("/user", async (req, res) => {
  // url   /user?name=irie
  const name = req.query.name;
  await db.set("user.name", name).write();
  res.send(`Hey ${name} `);
});

// Post method     url http://localhost:3000/login
//  {
//     "userName": "Hadi",
//      "pass":"000callme000"
//  }
//
app.post("/login", (req, res) => {
  console.log(req.body);
  const userName = req.body.userName;
  const userPass = req.body.pass;
  if (userName === "Irene" && userPass === "000callme000") {
    res.status(200).send(`ìnvalid user name and pass`);
} else {
  res.status(401).send(`ìnvalid user name or pass`);  
  }
});

// REMOVE
app.get("/delete", async (req,res) => {
  // to remove article
  // url /**
  const title = req.query.title;
  await db.get()
})

app.get("/api",(req,res) => {
  res.status(200).json({id: 1, cityName: "Berlin", country:"DE"});
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});
