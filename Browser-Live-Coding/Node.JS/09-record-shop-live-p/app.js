/**External Modules */
const express = require("express")
/* const logger = require("morgan") */
const morgan = require("morgan")
const indexRoute = require("./routes/indexRoute")
const recordsRoute = require("./routes/recordsRoute")

/**INIT (INIT/ creating  MY server(app is my server now*/
const app = express()

/**In express all the controllers are Middlewares */
/**USE MIDDLEWARE */
/*app.use(here specify middleware)*/

/* app.use(logger("combined")) */
app.use(logger("dev"))


/**ROUTES */
app.use("/", indexRoute)
app.use("/api/records", recordsRoute)


/*Listening Port */

app.listen(3000, () => console.log("server is running"))


/**MVC modal views controller pattern */