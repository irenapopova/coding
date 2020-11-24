// 2. step
// creating reducers
//  reducer Will check which action has been dispatched and then modify the state
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};
export default counter;
