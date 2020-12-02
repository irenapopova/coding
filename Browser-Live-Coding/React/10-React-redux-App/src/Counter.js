import React from 'react'
import { connect } from 'react-redux';

function Counter(props) {
  console.log(props);
  return (
    <div>
      <h2>Counter : {props.count}</h2>
      <button onClick={() => props.dispatch({ type: "increment" })}>Increment</button>
    </div>
  )

}

const getState = (state) => {
  return { count: state.count }
}
export default connect(getState)(Counter);