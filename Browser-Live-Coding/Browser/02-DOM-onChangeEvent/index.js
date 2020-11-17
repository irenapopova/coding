
let select= document.querySelector("select")
let box= document.querySelector(".box")

select.addEventListener("change", (e)=>{
    console.log(e.target.value)
    box.style.backgroundColor=e.target.value
})

/*
it will not execute our event handler with keyboard 
select.addEventListener("click", (e)=>{
    console.log(e.target.value)
    box.style.backgroundColor=e.target.value
}) */


let radios=document.querySelectorAll("input")
radios.forEach(radio=>{
    radio.addEventListener("change",()=>{
       if(radio.checked){
        box.style.fontSize=`${radio.value}px`
    } 
    }) 
}) 


