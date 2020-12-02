import React, { useState } from 'react';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from "react-redux";

// initialState is an object
const initialState = { count: 0, items: [] }

// in the reducer we have the action and the state
const reducer = (state = initialState, action) => {
  switch (action, type) {
    case "increment":
      return { count: state.count + 1 }

    // return{...state, count:state.count+1}
    case "decrement":
      // ...state means take all the other values , change the count value and return the new state,
      return { ...state, count: state.count - 1 }
    default state
  }
};

const store = createStore(reducer);

function App() {
  const [count, setCount] = useState(0)
  return (
    /* <MyContext.Provider value={{data}}></MyContext.Provider> */
    <Provider store={myStore} >
    <div className="App">
      <h1>My React App</h1>
      <Counter count={} setCount={setCount} />
    </div>
  );
  </Provider> 
}