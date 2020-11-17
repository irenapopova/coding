import "./lodash.js"


let time = moment()
console.log(time.format('dddd'))
console.log(time.startOf('day').fromNow())




console.log(_)
console.log(_.random(5,10))

let cities= ["berlin","frankfurt","hamburg"]

console.log(_.chunk(cities, 1))

console.log(_.first(cities))

console.log(_.last(cities))

console.log(_.shuffle(cities))


/* let users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

  console.log(_.findIndex(users, {user:"barney"}))

  console.log(_.findIndex(users, {active:true}))

  console.log(_.find(users,{user:"pebbles"})) */


  let users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
   
console.log(_.find(users, function(o) { return o.age < 40; }))


console.log(_.includes([1, 2, 3], 5))


console.log(_.isInteger(3))

console.log(_.add(3,2))

console.log(_.sum([1,2,3,4,5]))

