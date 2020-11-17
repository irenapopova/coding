/* let printResult=(result)=>{
    console.log("here is your result = "+result)
}

let storeMyData=(result)=>{
    localStor..... 
}

let data=0;

function getdata(url,cb){
    setTimeout(()=>{
        console.log("fetching data from this "+url)
        data= {user:"ali"}
        cb(data.user)
    },1000)
}
getdata("google.com",printResult)
getdata("google.com",storeMyData)
console.log(data) */
/* let createElement=(type,value)=>{
    let elem= document.createElement(type)
    if(type==="img"){
        elem.src=value
    }else{
        elem.innerHTML=value
    }
    document.body.append(elem)
   console.log("here is you image on the screen")
 
}
let fetchData=(url,cb)=>{
    setTimeout(()=>{
            let data = {url:"https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"}

            cb("img",data.url)
            
    },1000)
}
fetchData("google",createElement) */




//Promise
//promise States
//pending 
//fullfil (resolve)
//reject

/* new Promise(callback) */

/* let myPromise = new Promise((resolve,reject)=>{
    //dummy data we received frommthe server
       let a = 4;
       if(a===2){
           resolve("I have received data from server")
       }else{
           reject({status:404,message:"server is down"})
       }
}) */

//asychronous
/* console.log(myPromise)
myPromise
.then(a=>console.log(a))
.catch(err=>console.log(err.message)) */

/* console.log("line 69")

let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
                console.log("line 72")
                resolve(2)
        },1000)
}) */


/*   console.log(promise)   */

  /* Array.map(elem=>console.log(elem)) */

/* promise.then(data=>{
    console.log(data, "this is first step")
    return data
}).then(forwardData=>{
    console.log(Math.sqrt(forwardData))
    return forwardData
})  
.catch(err=>console.log(err))

console.log("line 79") */
let createElement=(type,value)=>{
    let elem= document.createElement(type)
    if(type==="img"){
        elem.src=value
    }else{
        elem.innerHTML=value
    }
    document.body.append(elem)
    
   console.log("here is you image on the screen")
   return elem
 
}


    let MyPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
                    let data ={}
                    data.url= prompt("please provide url for image")
                /*     let data = {url:"https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"}  */
                    if(data.url){
                        resolve(data.url)
                    } else{
                        reject("user didn't provide us with any url")
                    }         
            },1000)

    })
    
    MyPromise.then(url=>{
        return createElement("img",url)

    }).then(elem=>{
        elem.width="200"
        elem.style.border="4px solid red"
    })
    .catch(err=>alert(err))







