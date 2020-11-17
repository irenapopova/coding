//creation of element
// document.createElement()
let h2 = document.createElement("h2");
console.dir(h2);

h2.classList.add("heading-2");
h2.innerHTML = "this is heading 2";

let div = document.createElement("div");
div.setAttribute("id", "first");

//inserting element into DOM
//(location/targetElement).appendChild("element")

div.appendChild(h2);

let img = document.createElement("img");
img.src = "1.jpg";
img.width = "200";

//width append method
/* document.getElementById("root").append(div, img); */
/* document.getElementById("root").appendChild(img) */

//insert element before ( parentNode.insertBefore(node, existingnode))

//dummy data from server
let data = [
  {
    title: "product 1",
    url:
      "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
    details: "lorem 10",
    available:false
  },

  {
    title: "product 2",
    url:
      "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg",
    details: "lorem 20",
    available:true
  },

  {
    title: "product 3",
    url:
      "https://image.shutterstock.com/image-photo/beautiful-pink-flower-anemones-fresh-260nw-1028135845.jpg",
    details: "lorem 30",
    available:false
  },
];
let container = document.createElement("div"); /* <div></div> */
container.classList.add("container"); /* <div class="container"></div> */
container.style.display="flex"


data.map((product) => {
  //creating card
  let card = document.createElement("div"); /* <div ></div> */
 /*  if(product.available){
    card.style.backgroundColor="green"
  }else{
    card.style.backgroundColor="red"
  } */
  card.style.backgroundColor= product.available ? "green" : "red"
  card.classList.add("card") /* <div class="card"></div> */
  card.style.width="300px"
  card.style.height="500px"
  card.style.overflow="hidden"
  //creating title h3
  let productName = document.createElement("h3"); /* <h3></h3> */
  //adding innerText/innerHTML in title h3
  productName.innerHTML = product.title; /*  <h3> product 1 </h3> */
  //creating image
  let image = document.createElement("img"); /*  <img src="" alt=""/> */
  //setting our image source attribute
  image.style.width="300px"
  image.style.height="300px"
  image.src =
    product.url; /*  <img src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg" alt=""/> */
  //creating details p
  let productDetail = document.createElement("p"); /* <p></p> */
  productDetail.innerHTML = product.details; /* <p> Lorem 10 </p> */

  //first we will append all elements into our card

  card.append(productName, image, productDetail); /* <div><h3></h3> <img/> <p></p> </div> */

  //card 1, card 2 , card 3  

  container.append(card)

});

//now append main container into html(DOM)
document.getElementById("root").append(container)

