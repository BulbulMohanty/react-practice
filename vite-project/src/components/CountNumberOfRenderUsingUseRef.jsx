import React, { use, useRef, useState, useEffect } from "react"

export default function CountNumberOfRenderUsingUseRef() {
  const counterRef = useRef(0)
  const [value, setValue] = useState("")

  useEffect(() => {
    counterRef.current++
  })

  const textboxElementRef = useRef()
  const changeUsingUseRef = (e) => {
    console.log(textboxElementRef)
    textboxElementRef.current.style.border = "1px solid red"
    textboxElementRef.current.style.borderWidth = "5px"
  }

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <h3>Count: {counterRef.current}</h3>
      <label>{value}</label>
      <input
        type="text"
        onClick={(e) => changeUsingUseRef(e)}
        ref={textboxElementRef}
      />
    </div>
  )
}
