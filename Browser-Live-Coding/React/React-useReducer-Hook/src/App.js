import React, { useState } from 'react';
import { initialValue, reducer } from './Reducer';

function App() {
  const [count, setCount] = useState(0);

  // event handler , increment is an action
  const increment = () => {
    setCount(count + 1)
  }
  // decrement is an action
  const decrement = () => {
    setCount(count - 1)
  }
  // reset is an action
  const reset = () => {
    setCount(count 0)
  }
  return (
    <div className="App">
      <h1>useReducer Hook</h1>
      <h2>Counter : {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button>reset</button>

    </div>
  );
}