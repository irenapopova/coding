import React from 'react'
import Timer from './Timer'

export default class App extends React.Component {
  state={
    timer:true
  }

  render(){
    return (
    <div>
      <h1>REACT LifeCycle Unmounting Phase</h1>
      <h2>ComponentWillUnmount</h2>
      {this.state.timer && <Timer/> }
     
      <button onClick={()=>this.setState({timer:!this.state.timer})}>Show/Hide</button>

    </div>
  )
  }
}

