
import React from 'react';
/* import Student from './Student'; */

class App extends React.Component{

 state={
    inputdata:""
  }
  


grabdata=(event)=>{
    this.setState({
      inputdata: event.target.value
    })
}

showData=(e)=>{
  console.log(this.state.inputdata)
}

  render(){
    console.log("render method")
    return(
      <div>
        <h1>Hello World</h1>
       {/* <Student name="Ben" msj="Good Morning"/>
       <Student name="Misbah" msj="hi"/>
       <Student name="Lawrance" msj="hello"/> */}

{/* //uncontrolled element */}
       <input type="text" onChange={this.grabdata} />
       <br/>
       <button onClick={this.showData}>Show data</button>
      </div>
    )
  }
}


export default App;