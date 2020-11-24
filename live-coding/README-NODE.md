# Live-coding

## NODE

[25/05/2020](may/25-05)

- Brief History: Motivation for using Node.js
- Running node scripts: The `node` command revisited
- Host Objects vs. Native Objects: Brief comparison with `process` object
- Printing to the Terminal: `console.log()` as output
- Getting arguments: `process.argv`, user input with `process.argv.slice(2)`
- Importing modules: the `require()` function
- Default exports: `module.exports = <expression to export>`
- Named exports: `exports.<namespace> = <expression to export>`
- The filesystem: Overview of the `fs` module (Node docs)
- `fs.readFile(<path>, <callback>)` vs. `fs.readFileSync(<path>)`
- `(err, data) => { ... }`, `err` first functions
- `fs.writeFile(<path>, <data>, <callback>)` vs. `fs.writeFileSync(<path>, <data>)`

- Project: Create a program that prints headers to the terminal

[26/05/2020](may/26-05)

- Review from previous lesson
- `process.exit()`
- Importing modules: the `require()` function
- Default exports: `module.exports = <expression to export>`
- Named exports: `exports.<namespace> = <expression to export>`"

- Project: Add support for an additional operation, ["med" to the switch](may/26-05/index.js)

[27/05/2020](may/27-05)

- Review from previous lessons (module exports)
- CODEMOTION conferences

[28/05/2020](may/28-05)

- more ARGS review from previous days. 

- Task: Students working on GitHub accounts (finishing previous projects, deployment of previous projects, adding information to all the README's) 

[02/06/2020](jun/02-06)
- `request` and `axios` packages
- `axios.get(<url>).then(<success cb>).catch(<error cb>).finally(<cb>)`
- `axios` and `async await`

Task: refactor today's code, get your own api key from open weather.

[03/06/2020](jun/03-06)
- Review from previous lesson

- `fs.createWriteStream(<path>)`, `.write(<data>)`
- `fs.createReadStream(<path>)`, `.pipe(<writable stream>)`
- Read: [Streams in depth](https://jscomplete.com/learn/node-beyond-basics/node-streams#what-exactly-are-streams)

- Task: program-to-compress-files

[04/06/2020](jun/04-06)
- Solution for yesterday's taks 
- Creating a (very) simple server: `http.createServer(<callback>)`
- Working on ports: `server.listen(<port>)` 
- The request response cycle: `req` object, `res.write()`, `res.end()`"

08/06/2020 Project: OxFord-Dictionary
