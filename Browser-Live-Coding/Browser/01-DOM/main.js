// DOM
//dom is tree of nodes/elements created by browser.
//browser will take your html file and convert into a Model structure that structure is called DOM.
//in that model we have document object

//environments
//Node
//Browser
 //these are two hosts

//from Node you will get global Object
//from Browser you will get window object


/*  console.dir(document)
 console.log(document.URL)
 console.log(document.title)
 document.title = "Document Object Model Title"
 console.log(document.title)
 document.all[6].innerHTML= "changing heading"
 console.dir(document.all[6]) */

 console.log(window)


 //build in javascript object
/*  console.log
 setTimeout
 setInterval;
 new Date()
 new Object()
 classes
 function */ 

/*  let number1 = prompt("please enter first number")
 let number2 = prompt("please enter second number")
  console.log(typeof number1) 
 let n1 = parseInt(number1)
 let n2 = parseInt(number2)
 let sum = n1+n2
console.log(sum) */

/* let confirmStatus = confirm("do you want to enter more numbers")
console.log(confirmStatus)
if(confirmStatus){
    console.log("user selected Okay")
}else{
    console.log("user Selected Cancel")
} */


/* window.alert
window.prompt
window.confirm */

//target Element by id
/* let h1 = document.getElementById("heading")
console.dir(h1)
h1.style.backgroundColor="green"
h1.style.border="3px solid red"

let p = document.getElementById("para")
p.style.fontSize="20px" */


//target elements by className returns HTMLcollection
/* let listItems = document.getElementsByClassName("list")

console.dir(listItems)
for(let i=0;i<listItems.length;i++){
    if(i%2!==0){
        listItems[i].style.backgroundColor="red"
    }
} */

/* let convertedList= [...listItems] /* Array.from(listItems) 

console.dir(convertedList) */

/* convertedList.map((elem,i)=>{
    if(i%2!==0){
          elem.style.backgroundColor="red"  
    }
}) */


//target elements by Tag returns HTMLcollection
/* let listItems = document.getElementsByTagName("li")

console.dir(listItems)
for(let i=0;i<listItems.length;i++){
    if(i%2!==0){
        listItems[i].style.backgroundColor="red"
    }
} */
/* 
querySelector returns you first item with that selector in doc. 
if you target with classname/tagname ,it will always select first one
let h1= document.getElementById("heading") */
/* let h1= document.querySelector("#heading")
h1.style.backgroundColor="green"

let listitem= document.querySelector("ul li:nth-child(3)")
listitem.style.border="2px black solid"
console.log(listitem) */

/* 
querySelectorAll returns you NodeList collection of items in doc. */

//HTML collection you cannot use forEach and array method(map,filter...)
// NodeList .you can use forEach with this list.
/* let list = document.querySelectorAll(".list")
 console.log(list[1])
list.forEach(item=>console.log(item)) */

let image = document.querySelector("img")
console.dir(image)
image.src="http://127.0.0.1:5500/2.jpg"
image.width="400"
image.style.borderRadius="50%"



//add class into your element
/* image.classList.add("onemore")
console.log(image.classList)

//remove class into your element
image.classList.remove("onemore")
console.log(image.classList) */

//toggle class into your element(if it is there remove it or if it is not there add it.)
image.classList.toggle("onemore")
console.log(image.classList)



//how we can get attributes of element

console.log(image.getAttribute("src"))
console.log(image.getAttribute("width"))

let inp = document.querySelector("input")
console.log(inp.getAttribute("type"))

//how we can set attributes of element
//setAttribute receives 2 argument, first one is attribute, second value of that attribute 
image.setAttribute("src","http://127.0.0.1:5500/1.webp")

console.log(image.src)