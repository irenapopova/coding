let form =document.querySelector("form")
let allInputs=document.querySelectorAll("input")
let img = document.querySelector("img")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
 /*    let obj={skills:[]} */
 /*    let skills=[] */
    allInputs.forEach(inp=>{
        if(inp.type==="checkbox"){
            if(inp.checked){
               /*  obj.skills.push(inp.value) */
                console.log(inp.value)
            }
        }
        if(inp.type==="radio"){
            if(inp.checked){
              /*   obj.gender=inp.value */
                console.log(inp.value)
            }
        }
        if(inp.type==="file"){
            console.dir(inp.value)
            let splitvalue= inp.value.split(`\\`)
            let imageName= splitvalue[splitvalue.length-1]
            console.log(imageName)
            img.src=imageName

        }
       
    })
  
})