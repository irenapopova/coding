// // Object literal context
const o = {
  name: "Ali",
  age: 22,
  add: "xxx str"
};
// // Property accessors

// // 1- Dot notation     object.property
o.name;
o.age = 33;
// // 2- Bracket notation   object['property']
o["add"] = "see str";
// // Object.keys
console.log(Object.keys(o));
// // Object.values
console.log(Object.values(o));
// // Methods
o.print = function() {
  console.log(
    ` Hi ${o.name} you are very old ${o.age} and it's very nice to live in ${o.add} `
  );
};
o.print();
function userData(userName, userAge, userAdd) {
  const obj = {
    name: userName,
    age: userAge,
    add: userAdd
  };
  obj.outPut = function() {
    console.log(
      ` Hi ${this.name} you are very old ${this.age} and it's very nice to live in ${this.add} `
    );
  };
  obj.outPut();
  return obj;
}
userData("Olag", 40, "see str");

// this

// Object.prototype.hasOwnProperty()

const person = {
  hight: 177,
  age: 34,
  city: "Berlin"
};
console.log(person.hasOwnProperty("sss"));
console.log(person.hasOwnProperty("age"));
// Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
const fun = (x, o) => {
  return Object.assign(x, o);
}; // 2nd way to do it option
const fun2 = (x, o, y) => {
  return { ...x, ...o, ...y };
};
const o1 = {
  something: "ccc"
};
console.log(fun2({ name: "Ali", age: 33 }, { lastName: "yyy" }, { 1: 333 }));
console.log(fun(o1, { 1: "hi" }));

// Create an Object will have (user name,birthDay,birthMonth,birthYear)
function zodiac(name, day, month, year) {
  const result = {
    userName: name,
    birthDay: day,
    birthMonth: month,
    birthYear: year,
    yourZodiac: function() {
      data = [
        { signName: "Not real day!", from: "0000" },
        { signName: "Capricorn", from: "0101" },
        { signName: "Aquarius", from: "0121" },
        { signName: "Pisces", from: "0220" },
        { signName: "Aries", from: "0321" },
        { signName: "Taurus", from: "0421" },
        { signName: "Gemini", from: "0521" },
        { signName: "Cancer", from: "0622" },
        { signName: "Leo", from: "0723" },
        { signName: "Virgo", from: "0824" },
        { signName: "Libra", from: "0924" },
        { signName: "Scorpio", from: "1024" },
        { signName: "Sagittarius", from: "1123" },
        { signName: "Capricorn", from: "1222" },
        { signName: "Not real day!", from: "1232" },
        { signName: "empty", from: "0000" }
      ];
      let monthDay = this.birthMonth + this.birthDay;
      console.log(monthDay);
      let i = 0;
      while (monthDay >= data[i].from && i < data.length - 1) {
        i++;
      }
      let yourZodiacName = data[i - 1].signName;
      return `Hey ${this.userName} your zodiac sign is ${yourZodiacName}`;
    }
  };
  return result.yourZodiac();
}
console.log(zodiac("Hadi", "01", "09", "1989"));
