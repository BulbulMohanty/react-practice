import React, { useReducer } from "react"

const initialValue = { count: 0 }

const action = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
}

function reducer(state, action) {
  switch (action.type) {
    case action.INCREMENT:
      return { count: state.count + 1 }
    case action.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}

export default function CounterUsingUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <div>
      <button onClick={() => dispatch({ type: action.INCREMENT })}>Increment</button>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: action.DECREMENT })}>Decrement</button>
    </div>
  )
}
