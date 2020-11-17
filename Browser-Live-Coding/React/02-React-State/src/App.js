
import React from 'react';


//state is buildin object in react.you can store data in state ,so when you change any data , react re-render (call render method) the component

class App extends React.Component{



  state={
    count:0,
    status:true
  }



  increment=()=>{

    console.log("user clicked")
    console.log(this)
    this.setState({
      count : this.state.count+1
    })
    
  }
  decrement=()=>{
    console.log(this)
      this.setState({
      count:this.state.count-1
    })  
  }

  toggleCounter=()=>{
    this.setState({
      status: !this.state.status
    })
  }




  render(){
    
    console.log("calling render method")
      return (
        <div>
          <h1>Hello World</h1>
          <div style={{height:"200px"}}> 
          { this.state.status ? <h2>Counter : {this.state.count} </h2> : null }
          </div>
          

{/* //pass reference */}
{/* we use camelcase for event names */} 
          <button onClick = {this.increment} > increment</button>
          <button onClick = {this.decrement} > decrement</button>



          <button onClick= {this.toggleCounter} >Show/hide counter</button>
        </div>
      )
  }
}













//stateless //presentational component --- before react version 16.12.0 
/* function App() {
      return (
        <div className="App">
          <h1>My React App</h1>
        </div>
      );
} */


export default App;