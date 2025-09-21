import React, { useState, useMemo } from "react"

export default function HandleTimeTakingWorkUsingUseMemo() {
  const [color, setColor] = useState("red")
  const [number, setNumber] = useState(0)

  const timeTakingWork = () => {
    const numberToExecute = number * 100000000
    for (let i = 0; i < numberToExecute; i++) {
      Math.random()
    }
    console.log(`Ran : ${numberToExecute}`)
  }

  // Memoize the result of timeTakingWork so it only runs when 'number' changes
  const timeTakingWorkResult = useMemo(() => timeTakingWork(number), [number])

  return (
    <div style={{ padding: "20px", backgroundColor: color }}>
      <input
        id="inputFieldForNumber"
        type="number"
        onChange={(e) => setNumber(e.target.valueAsNumber)}
      />
      <label id="lableForTimeTakingWork" htmlFor="inputFieldForNumber">
        {timeTakingWorkResult}
      </label>
      <button onClick={() => setColor(color === "red" ? "green" : "red")}>
        Red/Green
      </button>
    </div>
  )
}
