//Events are actions taken by user within the browser.
//click
//submit
//keydown keyup
//change
//resize
/* In the case of the Web, events are fired inside the browser window, and tend to be attached to a specific item that resides in it — this might be a single element, set of elements, the HTML document loaded in the current tab, or the entire browser window. There are many different types of events that can occur. For example:

The user selects a certain element or hovers the cursor over a certain element.
The user chooses a key on the keyboard.
The user resizes or closes the browser window.
A web page finishes loading.
A form is submitted.
A video is played, paused, or finishes.
An error occurs. */


//Event handler(its a function that executes when user takes that action)
/* console.dir(document)
console.log(window) */

let h = document.querySelector("h1")
h.style.backgroundColor="gray"

let countH=0

let countP=0
// first way of attaching event handler to your element
document.getElementById("main").onclick = (e)=>{
    if(e.target.tagName==="P"){
        countP++;
    }else if(e.target.tagName==="H1"){
        countH++
    }
    console.log(e.target, "this is the target")
    console.log(e.currentTarget, "this is a current target")
    console.log("user Clicked on h1 "+ countH+ " times")
}
/* img.src="address" */

/* let p = document.querySelector("p") 
console.dir(p)
p.onclick = ()=>{
    console.log("user Clicked on paragraph")
} */


/* image.src="ssad"
image.setAttribute("attribute name" , "value")  */

// NodeElement.addEventListener(eventName, eventHandler, optional(bubbling,capturing))
/* const clickhandler=()=>{
    console.log("user Clicked on h1")
    console.dir(h)
} */

/* h.addEventListener("click", clickhandler)  */

//write media query in javascript,if you have to execute any code or want dynamic data.

window.addEventListener("resize",(event)=>{
   console.log(event.currentTarget)

 /*    console.log(window.innerHeight, "height")
    console.log(window.innerWidth, "width" )
    if(window.innerWidth<500){
        clickhandler()
        document.body.style.backgroundColor="lightblue"
    }else if(window.innerWidth>700){
        document.body.style.backgroundColor="red"
    } */
})

document.addEventListener("scroll",(e)=>{
    console.log(e)
})

//when there is any event occurs ,Event object is created ,and received by the event handler.
//event object gives you information about user activity with the webpage


//e.target (where user clicked)
//e.currentTarget (element which is firing that event)





