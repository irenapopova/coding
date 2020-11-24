# Live-coding

## DATA-SERVER 

[03/08/2020](aug/03-08)

- The server as a program 
- server-client concept: visualising the request response cycle
- `express` vs. `http.createServer`: creating a simple express server

[project-gen](aug/03-08/project-gen)
- Using `npx express-generator <project-name> --no-view --git`
- Preparing our project for debugging: `node --inspect`, `nodemon`
- Removing unnecessary code from the boilerplate

Assignment: read materials from resources (express, http status codes, http request methods)

[04/08/2020](aug/04-08)

- Mock database for quick prototyping `lowdb`
- Setting up `lowdb`: `data` directory, initial setup
- MVC Concepts: C is for controller 
- Attaching controllers to our app: `app.get(<path>, <controller>)`
- REST I: `GET` is for reading data
- Sending responses: `res.send(<string>)`, `res.json(<object>)`
- The request object: `req`
- Receiving JSON requests: `app.post(<path>, <controller>)`, `req.body`

Assignment: preparing your GitHub, with READMEs, screen shots, gifs, and check that you commented all your files for the Job application phase. 

[05/08/2020](aug/04-08)

- Review of `lowdb`
- `process.env`
- `res.status()`

Continue with yesterday's assignment

[06/08/2020](aug/06-08)

- `Middleware`: A function that executes between a received request, and a sent response
- Using middleware: `app.use(<middleware>)`, `app.use(<path>, <middleware>)`
- Reviewing used middleware: `logger()`, `express.json()`
- Middleware function signature: `(req, res, next) => { ... }`

[10/08/2020](aug/10-08)

- `CORS`: Cross Origin Resource Sharing
- Response headers: `res.set(<headers object>)`
- Handling CORS for all routes: custom middleware

[Router](aug/10-08/router)
- `app.use(<path>, <router>)`
- `router.get()`

[11/08/2020](aug/11-08)
- Error handling middleware signature: `(err, req, res, next) => { ... }`
- Changing response status: `res.status()`
- Using the error handler: `next(err)`
- `app.use(404)`
- The `http-errors` 
- Creating error from error: `createError(<status>, <error>)` 
- Constructing HTTP errors: `createError.<error constructor>(<message>)`

12/08/2020
- the main differences between NoSQL and SQL Databases.
- Install MongoDB Community Edition on Ubuntu
- Install MongoDB Compass 

[13/08/2020](aug/13-08)

- The mongo shell: accessing mongodb through the terminal
- The mySQL shell: writing queries in the terminal
- Creating and using Databases: mongo and mySQL shells
  mongo: `use <db name>`
  sql: `CREATE DATABASE <db name>;`, `USE <db name>;`
- Creating a collection in mongo: `db.createCollection();`, `show collections`
- Creating a table in SQL: 
  `CREATE TABLE <table name> (<column definitions>);`, `SHOW TABLES;`
- Difference I: SQL requires structure, `DESCRIBE <table name>;`
- Showing all documents in mongo: `db.<collection>.find({})`
- `db.<collection>.find({}).pretty()`
- `db.<collection>.find({}).sort().pretty()`
- Showing all rows of a table: `SELECT * from <table name>`

[17/08/2020](aug/17-08)
-`mongoose`
- Connecting to our database with `mongoose.connect()`
- Listening to errors with `mongoose.connection.on('error', <function>);`
- Planning our collection schema: Class diagrams
- MVC Concepts: M is for Model
- Project organization IV: The `models` folder 
- Describing collections: `new mongoose.Schema({<field name>: <field type>});`
- Exporting a model: `mongoose.model(<collection name>, <schema>);`
- What are seed scripts? Seed script as database Proof Of Concept.
- Using our models in seed scripts: `new <model name>({<data>})`
- Saving documents to database: `Model.prototype.save()`
- Specifying a type the long way: `{ type: <field type> }`
- Making a field required: `{ type: <field type>, required: true }`
- Unique values: `{ type: <field type>, unique: true }`
- Scalability pitfall: the `unique` option and null values
- Setting a default value: `{ type: <field type>, default: <value> }`
- Nesting objects in a Schema
- Using sub documents for common data structures
- Removing ids from sub documents: `new Schema(<definitions>, { _id: false})`
- Creating new documents: `await new <model name>(<data>).save();`
- (Very) basic schema validation: Using the `enum` option
- (Vary) basic schema sanitization: Using the `trim` option
- Getting all documents in collection: `await <model name>.find({});`
- URL - Query params: Processing query params, `req.query`
- Handling model errors: `try { ... } catch(e) { next(e); }`
- Route params: Processing variables in the path, `req.params`
- Getting a document by id: `await <model name>.findById(id);`
- Handling unfound documents with `http-errors`: 
  `createError.NotFound(<message>)` 
- Updating a document: `await <model name>.findByIdAndUpdate(id, <data>);`
- Getting back the updated document: The `new` update option
- Ensuring schema validation: The `runValidators` update option
- Removing a document: `await <model name>.findByIdAndRemove(id);`

[18/08/2020](aug/18-08)
- Review from previous lesson

- organizing/cleaning the code 

Assignment: getting all the employees from the database with specific address

[19/08/2020](aug/18-08)
- Review from previous lesson

- updating data 

Assignment: updating the timestamp (employeeAddedDate) in employee that got update

[20/08/2020](aug/18-08)	
- Review from this week's lessons

- Touch ups for a better REST API

24/08/2020 
- Students working on their own React Portfolio.

25/08/2020 and 26/08/2020 
- Applications workshop
- Students working on their CV's

27/08/2020 and 31/08/2020
- Students working on their own React Portfolio.

[01/09/2020](sep/01-09)
- Generating fake data using `faker`: `faker` api docs
- EJS (embedded JavaScript templating

[02/09/2020](sep/02-09)
- Getting all documents in collection: `await <model name>.find({});`
- URL - Query params: Processing query params, `req.query`
- Handling model errors: `try { ... } catch(e) { next(e); }`
- Route params: Processing variables in the path, `req.params`
- Getting a document by id: `await <model name>.findById(id);`
- Updating a document: `await <model name>.findByIdAndUpdate(id, <data>);`
- Removing a document: `await <model name>.findByIdAndRemove(id);`

[03/09/2020](sep/03-09)
- install `express-validator@5.3.1`
- install `express-handlebars`
- Importance of server side validation
- Very small example: Finding `validator.js` matchers
  `validator.isEmail(<string>)`
- Adding `express-validator` to our project
- Validating fields: `check(<field name>).<matcher function>`

[07/09/2020](sep/07-09)
- Relationship types: One to One, One to Many, Many to Many
- Charting out relations: Entity relation diagrams
- Implementing relations in mongoDB: The mongoose `ref` schema option
- creating REST endpoints for a shared resource
- Adding additional entities: the entity creation chain
- Deleting shared entities: the entity deletion chain

[08/09/2020](sep/08-09)
- Populating results:  `Query.prototype.populate(<ref field>)`
- Selecting related entity fields: 
  `Query.prototype.populate(<ref field>, <fields>)`
  
  [09/09/2020](sep/09-09)
- Authentication
- `bcrypt`
- Encryption intro: `hashing and salting`
- Hashing: `await bcrypt.hash(<plain text>, <salt rounds>)`
- Comparing: `await bcrypt.compare(<plain text>, <hash>)`

[10/09/2020](sep/10-09)
- Authentication full version
- Using cookies to save state across requests
- Setting cookies with `res.cookie()`
- Using `cookieParser` to read cookies: `req.cookies`
- Cookie pitfalls: memory limit, security vulnerabilities
- Saving data on the server side
- Installing and configuring `express-session`
- Reading and writing to session: `req.session`

[14/09/2020](sep/10-09)
- Creating custom middleware to validate users
- Protecting `admin` routes: `GET /users`
- Deleting users: Checking for proper roles before deleting

[15/09/2020](sep/10-09)
- Installing and configuring `multer` for uploads
- Choosing proper paths: Saving file paths to DB

[16/09/2020](sep/16-10)
- "Serverless" deployment: the `now` service and npm package
- Deploying our application to `now`: configuring `now.json`
- Automation: Updating `package.json` with useful scripts
- updates & previews for production with `vercel` 


17/09/2020
- Frontend Deployment:
- with `Heroku` 
- with paid services `1und1`

[21/09/2020](sep/21/09)
- Boilerplate for full-stack-server with React, Express, Mongo: 
[Click this link for the steps](https://github.com/FBw-26/lessons/blob/master/FULL-STACK-README.md)

[22/09/2020](sep/21-09)
- Saving data at Local Storage
