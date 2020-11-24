document.write("Hey, This is me");
document.write("<h3> Hadi </h3>");

const create = () => {
  let newElement = document.createElement("div");
  let newText = document.createTextNode("I am a new element");
  //console.log(newElement);
  newElement.appendChild(newText);
  document.body.appendChild(newElement);
};
const addToList = () => {
  let userInput = document.querySelector("#userText").value;
  console.log(userInput);
  let newLi = document.createElement("li");
  let text = document.createTextNode(userInput);
  newLi.appendChild(text);
  document.querySelector(".result").appendChild(newLi);
  document.querySelector("#userText").value = "";
};
