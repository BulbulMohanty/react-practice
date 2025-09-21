import React, { useContext } from "react"
import { CounterContext } from "../context/CounterUsingUseContext"

export default function CounterChildComponent() {
  const counterObj = useContext(CounterContext)
  return (
    <div>
      <button onClick={() => counterObj.setCounter(counterObj.counter + 1)}>
        Increment
      </button>
      <h3>Count: {counterObj.counter}</h3>
      <button onClick={() => counterObj.setCounter(counterObj.counter - 1)}>
        Decrement
      </button>
    </div>
  )
}
