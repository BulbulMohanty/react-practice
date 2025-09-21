import React, { useState } from "react"

export default function CounterUsingUseState() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h3>Counter : {counter}</h3>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  )
}
