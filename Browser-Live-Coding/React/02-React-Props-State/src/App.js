import React, { Component } from "react"
import Color from "./Color"
/* class App extends React.Component{

} */
//statefull component
class App extends Component{ 

  //props : when you pass data from parent to child(ren)
  //props: are the properties in component tag
  //Note: in react Data is uni-directional.from parent to child
    render(){

      let colorsArray=["red","green","blue","yellow"]
            return(
              <div className="App">
              <h1>Hello world</h1>
           {/*     <img src=""  width="" alt=""/>  */}
            {/*   <Color color="red"/>
              <Color color="green"/>
              <Color color="yellow"/>
              <Color color="pink"/> */}
              { colorsArray.map(colorName=>{
                return(
                  <Color key={colorName} color={colorName}/>
                )
              })  }

            </div>
            )
    }
}



//presentational component / stateless component
/* function App() {

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
   
  );
} */



export default App;



/* class Abc {
  constructor(name,age){

    this.name=name;
    this.age=age
  }
  getDetails(){
    console.log(this.age)
  }
} */
/* let student= new Abc("Fatah",24)
student.getDetails() */
//sub class 

/* class ChildClass extends Abc{
    constructor(name,age,section){
      super(name,age)
      this.section= section
    }
}

let child= new ChildClass("naqvi",32,"fbw32")

child.getDetails() */