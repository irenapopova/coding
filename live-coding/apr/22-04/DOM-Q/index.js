// Change the font of the body element.
let body = document.querySelector("body");
body.style.fontFamily = "Arial";
// Center the text of h1 on the page.
let title = document.querySelector(".title");
title.style.textAlign = "center";

let mainSect = document.querySelector(".main");
mainSect.style.display = "flex";
mainSect.style.flexFlow = "row wrap";
mainSect.style.justifyContent = "space-around";
mainSect.style.boxSizing = "border-box";

//The menu headings have a class named category. Select the elements by class name. Then, change the color and font-style of each element.
let menuCat = document.querySelectorAll(".category");
console.log(menuCat);
menuCat.forEach(({ style: category }) => {
  category.fontSize = "2rem";
  category.fontStyle = "italic";
  category.borderBottom = "1px solid black";
});

let warning = document.getElementById("warning");
warning.style.fontSize = "2rem";
warning.style.marginBottom = "0";
warning.style.marginLeft = "1.5rem";

//Create a function named "colorGenerator" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of food-category. Give each list a different background color using the function that you created.
const colorGen = () => {
  let result = "#";
  let HexNum = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += HexNum[Math.floor(Math.random() * 16)];
  }
  result += "50";
  return result;
};
// color generator in other way 😉

const colorGenOtherWay = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let a = Math.random();
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
let foods = document.querySelectorAll(".food-category");

foods.forEach(({ style: item }) => {
  // item.backgroundColor = colorGen();
  item.backgroundColor = colorGenOtherWay();
  item.width = "30%";
  item.height = "10rem";
  item.textAlign = "center";
  item.padding = "1rem";
  item.borderRadius = "5px";
});

const foodItems = document.querySelectorAll(".food-item");
foodItems.forEach(({ style: item }) => {
  item.marginTop = "1rem";
  item.listStyle = "none";
});

// Select all even allergy-info items. Give the even items a different background color.
let allergyItems = document.querySelectorAll(".allergy-info");
allergyItems.forEach(({ style: item }, i) => {
  if (i % 2 == 1) {
    item.backgroundColor = "pink";
  }
  item.paddingLeft = "1rem";
  item.paddingLeft = "1rem";
  item.lineHeight = "1.75";
});

// Make the allergy-warning appear as a column in the center of the page.
let allergySection = document.querySelector(".allergy-warning");
allergySection.style.display = "flex";
allergySection.style.flexFlow = "column";
allergySection.style.justifyContent = "center";
allergySection.style.alignItems = "center";

let allergyList = document.querySelector(".allergies");
allergyList.style.width = "20rem";
allergyList.style.listStyle = "none";
allergyList.style.marginTop = "1rem";

//The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.
let footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.flexFlow = "row wrap";
footer.style.justifyContent = "center";
let description = document.querySelectorAll(".food-desc");
description.forEach(({ style: desc }) => {
  desc.border = "5px solid orange";
  desc.borderRadius = "100%";
  desc.height = "7rem";
  desc.width = "7rem";
  desc.display = "flex";
  desc.justifyContent = "center";
  desc.alignItems = "center";
  desc.margin = "1rem";
});
