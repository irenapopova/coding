// in router index.js

```js
const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  console.log('Hey!!')
  res.send('Hey! It works!');
});

module.exports = router;
```

### 
```js
const express = require('express');
const router = express.Router();

// request has all the information 
// response has all the methods for sending DATA back
router.get('/', (req, res) => {
  const irena = {name: 'Irena', age: '28', cool: true};
  res.json(req.query); // get the query parameters 
});
// put a variable in a route  :name , this will give me the name of each of my requests
router.get('/reverse/:name', (req,res) =>{
  /* res.send('It works!') */
  res.json('/reverse/:name');
})

module.exports = router;
```

### Templating - core Concepts

### res.render 
### pug tamplating language


```js
// view engine Setup
app.set('view', path.join(__dirname, 'views')); // views is the folder where are the pug files

app.set('view engine', 'pug'); // using the engine pug, but also mustache or EJS works great too

```


### hello.pug 

```html
// block / section


```

#### Templating helpers

### Controllers 

M - Model
V - View (template)
C - Controllers

### MiddleWare

run code after the request but before the response actually happens

express has a global MiddleWare 
app.use 