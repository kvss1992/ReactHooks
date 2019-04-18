import React, { useReducer, useEffect } from "react";

function reducer(state, action) {
  let disable = !(state.count >= 0);
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, disable };
    case "decrement":
      return { count: state.count - 1, disable };
    default:
      return { count: 0, disable };
  }
}

function CounterWithReducer() {
  const initialState = { count: 0, disable: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Yes!</button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        disabled={state.disable}
      >
        Nope!
      </button>
    </div>
  );
}
export default CounterWithReducer;
