
import React from 'react';
import Student from './Student';
import Data from "./data.json"
import Card from './Card';

function App() {
  let data=[
    {name:"Misbah" ,msj:"Good Morning"},
    {name:"Ben", msj:"Welcome"},
    {name:"Fatah", msj:"Hello"}
  ]
  return (
    <div className="App">
      <h1>My React App</h1>
      {data.map(item=>{
        return (
          <Student key={item.name} name={item.name} msj={item.msj}/>
        )
      })}

      <div style={{display:"flex",flexWrap:"wrap"}}>
        {
          Data.map(item=>{
            return(
              <Card key={item.id} author={item.author} url={item.download_url}/>
            )
          })
        }
      </div>
     {/*  <Student name="Misbah" msj="Good Morning"/>
      <Student name="Ben" msj="Welcome"/>
      <Student name="Fatah" msj="Hello"/> */}

    </div>
  );
}


export default App;