// Events:
// User Events (interaction) and Browser Events (loading, etc...)

// Listening:
// Higher order functions aka functions that accept function (callbacks)
let divText = document.querySelector(".text");
const print = () => {
  divText.innerHTML += "Hi I am onclick from Html <br>";
};
let btn = document.getElementById("more");
btn.onclick = function () {
  divText.innerHTML += "Hi I am onclick method from js <br>";
};
function myFunction() {
  header.style.backgroundColor = "white";
}
// - Listening to user actions
//   `EventTarget.addEventListener(<namespace>, <callback>)`
// - Mouse Events:
// `click`, `mouseenter`, `mouseleave`
let header = document.querySelector("h1");
header.addEventListener("mouseover", () => {
  header.style.backgroundColor = "red";
});
header.addEventListener("mouseleave", myFunction);

function keyUpFunction(e) {
  this.style.backgroundColor = "pink";
  console.log(e);
  if (e.code == "KeyS") alert("You are cool");
  // if (e.code == "Enter") addToList();
}
function keyDownFunction(e) {
  this.style.backgroundColor = "yellow";
}
function keyPressFunction(e) {
  this.style.backgroundColor = "white";
}
// - Keyboard Events:
// `keydown`, `keyup`

let userInput = document.querySelector("#userInput");
userInput.addEventListener("keyup", keyUpFunction);
userInput.addEventListener("keydown", keyDownFunction);
userInput.addEventListener("keypress", keyPressFunction);
