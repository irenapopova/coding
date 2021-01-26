➡️ route parameters are used for essential or required values 
➡️ use query strings parameter for anything that is optional and

query parameters are stored in an object with bunch of key value pairs 

http://localhost:3000/api/posts/2018/1?sortBy=name

### index.js
### Route Parameters

```js
const express = require('express');
const app = express();

// defining a rout : method, path and the controller 
app.get('/', (req, res) => {
  res.send('Hello there')
});
/* app.post()
app.put()
app.delete() */

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]);
});

// /api/course/1
app.get('/api/courses/:id', (req, res) => {
  res.send(req.params.id);
});
// 
app.get('/api/posts/:year/:month', (req, res) => {
  /* res.send(req.params.year); */
  // req.param object
  /* res.send(req.params);  */// to give both the year and the month
  // query parameter 
  res.send(req.query); 
});
/* app.listen(3000, () => console.log('listening in port 3000...')) */
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
```

### Handling HTTP GET Requests
👇 index.js
```js
const express = require('express');
const app = express();

const courses = [
  { id: 1, name: 'course1' },
  { id: 1, name: 'course1' },
  { id: 1, name: 'course1' },
]

// defining a rout : method, path and the controller 
app.get('/', (req, res) => {
  res.send('Hello there')
});
/* app.post()
app.put()
app.delete() */

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

// /api/course/1
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));// to find a course that matches criteria
  if (!course) res.status(404).send('The course with the given ID was not found')
  res.send(course);

});

// 
app.get('/api/courses/:id', (req, res) => {

  // query parameter 
  res.send(req.query);
});
/* app.listen(3000, () => console.log('listening in port 3000...')) */
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));

```

### Handling POST REquests 


### Input Validation 

```js
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json()); // adding a piece of MiddleWare 

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
]

// defining a rout : method, path and the controller 
app.get('/', (req, res) => {
  res.send('Hello there')
});
/* app.post()
app.put()
app.delete() */

app.get('/api/courses', (req, res) => {
  res.send(courses);
});
// HTTP POST request 
app.post('/api/courses', (req, res) => {
  const schema = {
    name: Joi.string().min(3).required()
  };

  const result = Joi.validate(req.body, schema);
  console.log(result);

  if (!req.body.name || req.body.name.length < 3) {
    //404 Bad Request
    res.status(400).send('Name is required and should be minimum 3 characters.');
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

// /api/course/1 
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));// to find a course that matches criteria
  if (!course) res.status(404).send('The course with the given ID was not found')
  res.send(course);

});

// 
app.get('/api/courses/:id', (req, res) => {

  // query parameter 
  res.send(req.query);
});
/* app.listen(3000, () => console.log('listening in port 3000...')) */
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));

```

### HTTP put request 
index.js
```js

const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json()); // adding a piece of MiddleWare 

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
]

// defining a rout : method, path and the controller 
app.get('/', (req, res) => {
  res.send('Hello there')
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});
// HTTP POST request 
app.post('/api/courses', (req, res) => {
  /* const schema = {
    name: Joi.string().min(3).required()
  };

  const result = Joi.validate(req.body, schema);
  if (!result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  } */
  const { error } = validateCourse(req.body); // equivalent to result.error
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
  //Look up the course 
  const course = courses.find(c => c.id === parseInit(req.params.id));
  if (!course) res.status(404).send('The course with the given id was not found')
  // If not existing, return 404
  const result = validateCourse(req.body);
  // object destructuring
  const { error } = validateCourse(req.body); // equivalent to result.error
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  // ------ UPDATE COURSE -------------------------
  course.name = req.body.name;
  // Return the updated course
  response.send(course);
});
// in the function bellow is all the validation logic in one place 
function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()
  };
  // Validate
  return Joi.validate(course, schema);
}
// /api/course/1 
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));// to find a course that matches criteria
  if (!course) res.status(404).send('The course with the given ID was not found')
  res.send(course);

});

// 
app.get('/api/courses/:id', (req, res) => {

  // query parameter 
  res.send(req.query);
});
/* app.listen(3000, () => console.log('listening in port 3000...')) */
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));

```

### HTTP DELETE Requests
index.js