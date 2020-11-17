let form = document.querySelector("form")
//first way to get data from input fields
/* let username =document.getElementById("username")
let email =document.getElementById("email")
let password =document.getElementById("password") */

//second way to get data from input fields
let allInputs= document.querySelectorAll("input")

//third way


form.addEventListener("submit",(event)=>{
    //event handler
    event.preventDefault()
    console.log("form submitted")
    //first way to get data from input fields
/*     console.log(username.value, "this is username")
    console.log(password.value, "this is password")
    console.log(email.value, "this is email") */
/* let obj={}
    allInputs.forEach(inp=>{
       
       obj[inp.name]=inp.value
        console.log(`this is the ${inp.name} with value ${inp.value} `)
    })
    console.log(obj) */

    //third way
  /*   let data = new FormData(form) */
  /*   data.get() */
//data.get("here pass name attribute of input field")
 /*    console.log(data.get("username"))
    console.log(data.get("password"))
    console.log(data.get("email")) */

//fourth way to get data from inp fields
console.dir(form)
/* let mydata = [...form].map(inp=>inp.value)

console.log(mydata) */
let username = form.elements["username"].value
let password = form.elements["password"].value
let email = form.elements["email"].value
let obj={username,password,email}

console.log(obj)

})