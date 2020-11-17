let root= document.getElementById("root")
//crud
/*          create read update and delete 
  METHODS: POST   GET   PUT/PATCH  DELETE*/

const fetchData=()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(result=>{
        console.log(result)
        result.map(user=>{
            let card = document.createElement("div")
            card.style.width="200px"
            card.style.height="450px"
            card.style.margin="20px"
            card.style.boxShadow="2px 2px 5px black"
            let name= document.createElement("h2")
            name.innerHTML=user.name
            let username= document.createElement("h3")
            username.innerHTML=user.username
            let phone= document.createElement("h3")
            phone.innerHTML=user.phone
            let img= document.createElement("img")
            img.src= `https://joeschmoe.io/api/v1/${user.name}`
            img.width="200"
            card.append(img,name,username,phone)
            root.append(card)

        })
    })
}


fetchData()

let fetchquote=()=>{
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(res=>res.json())
    .then(final=>console.log(final))
}

fetchquote()

fetch("./index.json")
.then(data=>data.json())
.then(result=>console.log(result[0].id))
