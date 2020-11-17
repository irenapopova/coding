let h = document.querySelector("h1")

//first way of applying css
/* h.style.color="red"
h.style.border="2px solid green"
h.style.fontSize="30px" */

//second way of applying css

/* h.style.cssText= "color:red;border:2px solid green; font-size:30px;" */


//third way of applying css
/* let styleObj={
    color:"red",
    border:"2px solid green",
    fontSize:"30px"
}

Object.assign(h.style,styleObj ) */


//fourth way of applying css
h.classList.add("heading")




