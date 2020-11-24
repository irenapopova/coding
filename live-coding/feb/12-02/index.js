// Destructuring objects as function parameters
function fun(num, { name }) {
  console.log(num);
  let firstName = { name };
  console.log(firstName);
}
fun(22, { name: "Ali" });
const userData = {
  firstName: "Hadi",
  lastName: "Nsreeny",
  get fullName() {
    // this is getter method
    console.log(`${this.firstName} ${this.lastName}`);
  },
  set fullName(str) {
    // this is setter method
    let arr = str.split(" ");
    this.firstName = arr[0];
    this.lastName = arr[1];
  }
};

// getter
userData.fullName;
// userData.firstName = 'Ali';
// userData.lastName = 'Xxx';

// setter
userData.fullName = "Ali xxx";
userData.fullName; // getting new data
// constructor()

function Person(name, age, activities) {
  // (this) referencing an empty object
  // in js objects are dynamic so you can add property or change it
  this.name = name;
  this.age = age;
  this.activities = activities;
  this.printOut = function() {
    console.log(`Hey ${this.name}, you are too old  ${this.age}`);
  };
}
let ali = new Person("Ali", 22, ["party", "dance"]);
let olga = new Person("Olga", 40, ["sleeping", "dance"]);
console.log(ali);
ali.printOut();
const ojb = new Date();
console.log(ojb);
// class

class Animals {
  // setup
  constructor(_kind, _hometown) {
    this.kind = _kind;
    this.hometown = _hometown;
  }
  // instances probably declare under the constructor
  display() {
    console.log(
      `It is a very cute ${this.kind}, and lives in ${this.hometown} `
    );
  }
}
let casper = new Animals("Dog", "LA");
casper.display();
let sofi = new Animals("Fish", "Berlin");
sofi.kind = "Cat";
const dyson = new Animals("Fish", "Berlin");
console.log(dyson);
class Color {
  constructor() {
    this.name = "";
    this.age = 0;
    this.birthDay = 0;
  }
}
const red = new Color();
red.name = "Red";
red.age = 122334;

console.log(red);
const da = new Date();

class TV {
  constructor(_brand, _chanel = 1, _volume = 50) {
    this.brand = _brand;
    this.chanel = _chanel;
    this.volume = _volume;
  }
  incVolume() {
    if (this.volume < 100) {
      this.volume++;
      console.log(`Volume is ${this.volume}`);
    } else {
      console.log("this is too much");
    }
  }
  decVolume() {
    if (this.volume > 0) {
      this.volume--;
      console.log(`Volume is ${this.volume}`);
    } else {
      console.log("this is not too much");
    }
  }
  reset() {
    this.chanel = 1;
    this.volume = 50;
  }
  ranChanel() {
    this.chanel = Math.floor(Math.random() * 51);
    console.log(`Chanel ${this.chanel}`);
  }
  display() {
    return `this Tv is ${this.brand}, has ${this.chanel} and ${this.volume}`;
  }
}
let samsung = new TV("SAmsung", 20, 500);
samsung.incVolume();
samsung.ranChanel();
let apple = new TV("Apple", 100, 30);
console.log(apple.display());
// new class
class Person1 {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  display() {
    console.log(`Hey ${this.name} i am parent class`);
  }
}
// extends and super()
// extends --> inheriting the methods from the Original class which being called
// super --> gets access to the parent's properties and methods

class Kid extends Person1 {
  constructor(_name, _age, _height) {
    super(_name, _age);
    this.height = _height;
  }
  show() {
    return `${this.name} is a ${this.age} years old, i am child class`;
  }
}
let zain = new Kid("Zain", 10);
console.log(typeof zain);
zain.display();
console.log(zain.show());
const nancy = new Kid("Nancy", 40);
console.log(typeof nancy);
zain.increment = function() {
  console.log("Cool");
};
let names = ["Ali", "Nancy", "Olga", "Hadi", "Aai"];
let result;
// Array.find()
result = names.find(name => name.length == 4);
console.log(result);
// Array.filter()
result = names.filter(name => name.length == 4);
console.log(result);
// Array.map()
names.map(x => console.log(x));
let letters = ["a", "c", "b", "e", "d"];
let numbers = [2, 4, 6, 7, 8, 9, 10, 1, 10000];
// Array.reduce()
result = numbers.reduce((acc, cur) => acc + cur) / numbers.length;
console.log(result);
// Array.sort()
letters.sort();
console.log(letters);
names.sort();
console.log(names);
numbers.sort();
console.log(numbers);
// new Date()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
