// where I can link my js file

// Github assignment push

// window.alert === alert

// Zoom link always is
// https://zoom.us/j/3551491935
// Or you can join using ID
// Meeting ID: 355 149 1935

//
// document.querySelectorAll() will return A non-live NodeList 🧐
// -NodeList-
// NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().

// -Node-
// In the context of the DOM, a node is a single point in the node tree. Various things that are nodes are the document itself, elements, text, and comments.

// Node tree https://dom.spec.whatwg.org/#concept-node

let avatar = document.querySelector(".img");
console.log(avatar);
//avatar.innerHTML = "cool";
// let list = avatar.querySelectorAll("span");
// div.img
let list = document.querySelectorAll(".img span");
console.log(list);

list.forEach((item) => {
  console.log(item);
  item.innerText = "nice";
  item.style.backgroundColor = "red";
});
console.log(list.length);
list[2].style.color = "pink";
let navList = document.querySelector("#menuList");
console.log(navList);
// > + ~
let specialOnes = navList.querySelectorAll("li[class='highlight']");
console.log(specialOnes);
specialOnes[0].innerText = " Nice one";
let moreClass = document.querySelector(".main");
moreClass.classList.add("small");
moreClass.classList.add("textRtl", "flexSize");
moreClass.classList.remove("textRtl");
let classArr = ["classOne", "classTwo"];

// adding more classes to the div using ...
moreClass.classList.add(...classArr);
console.log(moreClass.classList);
moreClass.style.color = "blue";
moreClass.style.backgroundColor = "gray";
moreClass.style.fontSize = "1.5rem";
// font-size in js fontSize
moreClass.style.marginLeft = "5rem";
moreClass.style.display = "flex";
moreClass.style.justifyContent = "center";

document.write("Hi I am Hadi");
document.write("<h1>Coo this is me 😎</h1>");
