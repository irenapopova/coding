//envirnments
//node
//Browser(chrome)

/* let Cities = ["berlin", "frankfurt", "hamburg"]

console.log(Cities[0])

let array1= Cities.forEach(item=>item+"er")
console.log(array1)

let array = Cities.map(item=>{
    return item+"er"
})
console.log(array) */


/* let dciClass= {
    name:"fwb32",
    program:"web Dev",
    students:["irina","misbah","mahmood"],
    details:function(){
        console.log("this is "+ this.name + " doing "+ this.program)
    }
}
dciClass.details()
dciClass.name = "fwb33"
console.log(dciClass.name)
dciClass.students[1]="Naqvi"
console.log(dciClass.students[1]) */

/* let Cities = ["berlin", "frankfurt", "hamburg"] */

//make a copy of this array
//shallow clone

/* let copyCities=[...Cities]
let copyCities1=Cities.slice()
let copyCities2=Cities.map(item=>item) */

//deep clone
let dciClass= {
    name:"fwb32",
    program:"web Dev",
    students:["irina","misbah","mahmood"],
    details:function(){
        console.log("this is "+ this.name + " doing "+ this.program)
    }
}
//deep clone
let copyDciClass={...dciClass, students:[...dciClass.students]} //mostly used in react

copyDciClass.students[1]="Ali"

/* console.log(copyDciClass)
console.log(dciClass) */


let Cities = ["berlin", "frankfurt", "hamburg","bonn"]
//delete item from array
/* let newArray = Cities.filter(item=> (item!=="hamburg") ) */
/* Cities.splice(2,1) */
/* console.log(newArray)
console.log(Cities) */

//Add item in array
let newCopyArray = ["newCity", ...Cities]

console.log(newCopyArray)
console.log(Cities)







