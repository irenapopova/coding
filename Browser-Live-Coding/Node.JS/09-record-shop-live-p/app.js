

/**External Modules */
/* 'use strict'; */
const mysql = require('mysql');
const express = require("express")
/* const logger = require("morgan") */
const morgan = require("morgan")
const indexRoute = require("./routes/indexRoute")
const recordsRoute = require("./routes/recordsRoute")

/**INIT (INIT/ creating  MY server(app is my server now*/
const app = express()

// connection with MySql Database
const port = process.env.PORT || 3000;
const responseStr = "MySql Data:";


let mysqlHost = process.env.MYSQL_HOST || 'localhost';
let mysqlPort = process.env.MYSQL_PORT || '3306';
let mysqlUser = process.env.MYSQL_USER || 'root';
let mysqlPass = process.env.MYSQL_PASS || 'root';
let mysqlDB = process.env.MYSQL_DB || 'node_db';


let connectionOptions = {
  host: mysqlHost,
  port: mysqlPort,
  user: mysqlUser,
  password: mysqlPass,
  database: mysqlDB
};

console.log('MySql Connection config:');
console.log(connectionOptions);

let connection = mysql.createConnection(connectionOptions);
connection.connect();

connection.query('SELECT * FROM')
/**In express all the controllers are Middlewares */
/**USE MIDDLEWARE */
/*app.use(here specify middleware)*/

/* app.use(logger("combined")) */
app.use(morgan("dev"))


/**ROUTES */
app.use("/", indexRoute)
app.use("/api/records", recordsRoute)


/*Listening Port */

app.listen(3000, () => console.log("server is running"))


/**MVC modal views controller pattern */