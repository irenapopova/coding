/* console.dir(window)
//https://openweathermap.org/api
//https://jsonplaceholder.typicode.com/
//crud
*/
console.log(fetch("https://jsonplaceholder.typicode.com/posts")) 

//response.json() its a promise as well
fetch("https://jsonplaceholder.typicode.com/users") //first promise
.then(response=>response.json()) //second promise)
.then(result=>console.log(result))
.catch(err=>console.log(err.message))