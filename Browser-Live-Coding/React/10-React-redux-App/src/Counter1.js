import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function Counter1() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.count)

  const 

  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <input  type="text/>
    </div>
  )

}


