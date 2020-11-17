import React, { useState } from "react";

/* let cities=["berlin","frankfort","hamburg","bonn"]

let a = cities[0]
let b= cities[1]
console.log(a)
console.log(b)

const [a,b,...c] = cities;
console.log(a)
console.log(b) */



function App() {
    console.log(useState(0))
  /*   let obj={
    name:"ALi",
    age:30
  }

  const {name,age}=obj */

  const [count, setCount] = useState(0);
  
  const [items, setItems] = useState(["item1", "item2"]);

  const [inputValue, setInputValue] = useState("")

  /*   const [state,setState]= useState({count:0, items:["item1","item2"]}) */

  /*  const incrementCounter=()=>{
    setCount(count+1)
  } */

  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Counter: {count}</h2>
      {/*  <button onClick={incrementCounter}>increment</button> */}
      <button onClick={() => setCount(count + 1)}>increment</button>

      <br />

      <input type="text" onChange={(e)=>setInputValue(e.target.value)} />
      <input type="button" value="addItem" onClick={()=>setItems([...items,inputValue ])} />

      <ul>
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
