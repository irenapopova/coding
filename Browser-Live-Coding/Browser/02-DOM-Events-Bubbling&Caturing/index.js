let parent= document.querySelector(".parent")
let child= document.querySelector(".child")
let grandchild= document.querySelector(".grandchild")

/* nodeElement.addEventListener(eventName, eventHandler, optional(caturing) ) */

parent.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("user clicked on parent element")
})

child.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("user clicked on child element")
})

grandchild.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("user clicked on grandchild element")
})


//When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. (from most inner towards outside)
//bubbling will trigger event handler if you have same event names
//this process of execution is called propogation


//caturing phase (from most outer to most inner)