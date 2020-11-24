# Database Basics
[MongoDB basics commands](https://github.com/FBw-26/live-coding/blob/master/aug/13-08/index.js)

## mongo | SQL

> mongo: `use <db name>`

> SQL: `CREATE DATABASE <db name>;`, `USE <db name>;`

## Table | Collection

A place to keep records

> Creating a table in SQL:
> `CREATE TABLE <table name> (<column definitions>);`, `SHOW TABLES;`

> Creating a collection in mongo: `db.createCollection();`, `show collections`

> Difference I: SQL requires structure, `DESCRIBE <table name>`

## Row | Document

A single record in a collection/table

> Inserting a row in mySQL: `INSERT INTO <table name> VALUES (<values>);`

> Inserting a document in mongo: `db.<collection>.insertOne(<document>);`

> Difference II: Mongo implicitly creates collections with `.insertOne()`

## Column | Field

A value in a record

> Showing all rows of a table in SQL: `SELECT * from <table name>`

> Showing all documents in mongo: `db.<collection>.find({})`

## Key | Id

An id / key uniquely identifies a record

> Adding Ids to SQL:
> `CREATE TABLE <table name> ( id NOT NULL AUTO_INCREMENT, <column definitions>, PRIMARY_KEY(id) );`

Difference III: Mongo implicitly provides unique ids

## CRUD: Four primary data operations
CRUD aka Creat Retrieve Update Delete

#### Create: Inserting multiple rows / documents:

> SQL:
> `INSERT INTO <table> VALUES (<row 1>), (<row 2>), <...>;`

> mongo:
> `db.<collection>.insertMany([{ <document 1> }, { <document 2> }, <...>]);`

#### Retrieve: Querying the table / collection:

> SQL:
> `SELECT * from <table> WHERE <criteria>`

> mongo:
> `db.<collection>.find({ <field name>: { criteria } });`

#### Update: Updating a row / document:

> SQL:
> `UPDATE <table> SET <values> WHERE <criteria>;`

> mongo:
> `db.<collection>.updateOne({ <criteria>, {$set: <values> });`

#### Delete: Deleting a row / document:

> SQL:
> `DELETE FROM <table> WHERE <criteria>;`

> mongo:
> `db.<collection>.deleteOne({ <criteria> });`
