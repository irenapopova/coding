setTimeout(()=>{
    console.log("line 2")
})
//synchronous 
let a = 3;
console.log(a)

/* try{}
catch(err){} */
//exceptional cases
try{
    console.log("line 9")
    console.log("line 10")
    console.log("line 11")
}
catch(err){
    console.log(err.message)
}

//asynchronous code
setTimeout(()=>{
    console.log("line 9")
})

//blocking code
for(let i=0;i<1000000000;i++){

}

function printname(){
    console.log("naqvi")
}

printname()
console.log("line 22")
console.log("line 23")



