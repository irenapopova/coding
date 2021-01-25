const express = require('express');
const app = express();

// defining a rout : method, path and the controller 
app.get('/', (req, res) => {
  res.send('Hello')
});
/* app.post()
app.put()
app.delete() */

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]);
})

/* app.listen(3000, () => console.log('listening in port 3000...')) */
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));