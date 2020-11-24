function newUser(fName, lName, age, hope) {
  // outer function
  let result = {
    firstName: fName,
    lastName: lName,
    old: age,
    funThingsToDo: hope,
    printOut: function() {
      // inner function as method
      return `Hey ${this.firstName}, you are very old ${this.old} `;
    }
  };
  // this is inner function call
  return result;
}
// this is function call
let x = newUser("Ali", "st", 22, "dance");
console.log("this is x");
console.log(x.printOut());

let arr = [
  {
    1: "Ali",
    age: 22,
    copy: function() {
      return " first index";
    }
  },
  {
    1: "Hadi",
    age: 33,
    add: function() {
      return " 2nd index";
    }
  },
  {
    1: "olga",
    sum: function() {
      return " 3rd index";
    }
  }
];
console.log(arr[0].copy());
console.log(arr[1].add());
console.log(arr[2]["sum"]());
//console.log(typeof console.log);

// you can also use 🤓
//console.log(arr[2].sum());
/*
Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.

Example:
let person = {
  name: "John", 
  job: "teacher"
}
Expected Output:
{"John": name, "teacher": job} 
*/
let person = {
  name: "Ali",
  job: "teacher"
};
function keysToValue(obj) {
  const keysValuesPair = Object.entries(obj);
  console.log(keysValuesPair);
  let reversArr = [];
  for (let i = 0; i < keysValuesPair.length; i++) {
    reversArr.push(keysValuesPair[i].reverse());
  }
  return Object.fromEntries(reversArr);
}
console.log(keysToValue(person));
