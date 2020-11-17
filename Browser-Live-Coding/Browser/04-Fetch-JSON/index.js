//JSON
/* javascript object notation */


let data =[
    {
        "id":1,
        "name":"Joseph"
    },
    {
        "id":2,
        "name":"vassilis"
    }
]

//JSON.parse ,we will use in sychronous code
let convertedString= JSON.stringify(data)
/* console.log(typeof JSON.stringify(data)) */
console.log(JSON.parse(convertedString))


//if we are in asychronous code ,we will use
/* data.json() */