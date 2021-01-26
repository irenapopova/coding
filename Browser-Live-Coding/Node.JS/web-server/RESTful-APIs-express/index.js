const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./logger');
const express = require('express');
const app = express();

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
/* app.get('env') */
console.log(`app: ${app.get('env')}`);

app.use(express.json()); // adding a piece of MiddleWare 
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));

// Configuration

app.use(logger);

/* app.use(function (req, res, next) {
  console.log('Authenticating...');
  next();
}); */

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
  const { error } = validateCourse(req.body);
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

app.delete



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