
import React from 'react';
import img1 from "./images/1.png"
import data from "./data.json"


function App() {

  console.log(data)
  let status= false;
 /*  const getName=()=>{
    return(
      "Naqvi"
    )
  } */

  let cities=["berlin","frankfurt","bonn","berlin"]

  let citiesdata = cities.map((cityName,i)=>{
    return(
    <li key={i}>{cityName}</li>
    )
  })


  let authors= data.map(item=>{
    return(
      <div key={item.id}>
          <h3>{item.author}</h3>
          <img src={item.download_url} width="200"/>
      </div>
    )
  })


  let myStyling={
    backgroundColor:"yellow",
    border:"2px solid red"
  }

  return (
    //JSX CODE
    <div className="App" /* style={ myStyling } */ style={{backgroundColor:"yellow",border:"2px solid red"} }>
      <h1>My name is {status?"Naqvi":"Misbah"} </h1>
      <ul>
        {
         citiesdata
        }
      </ul>
      <img src={img1} alt="image"/>
      <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="none"/>


      {authors}
    </div>
  );
}


export default App;