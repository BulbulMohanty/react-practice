import React, { useState, useEffect } from "react"

export default function CounterUsingUseEffect() {
  const [counter, setCounter] = useState(0)

  /*
The useEffect hooks has second argument passed as an empty array.
This means that the effect will run only once when the component mounts.
The useEffect hook returns a cleanup function that will run when the component will get unmounted.
*/
  //   useEffect(() => {
  //     console.log("On mounting");
  //     document.title = `Count: ${counter}`;

  //     return () => {
  //       console.log("On unmounting");
  //       document.title = "React App";
  //     };
  //   }, []);

  /*
This useEffect hook takes the second argument an array with counter as the dependency.
That means the useEffect will run every time the counter changes.
*/
  useEffect(() => {
    document.title = `Count: ${counter}`
    console.log("Count:", counter)
  }, [counter])

  /*
This useEffect hooks does not take any second argument.
This means that the effect will run after every render.
It will run on mounting, updating and unmounting.
This is not recommended as it can lead to performance issues.
*/
  // useEffect(()=> {
  //     document.title = `Count: ${counter}`
  //     console.log("Count:", counter)
  // })

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h3>Count: {counter}</h3>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(counter + 5)}>Increment by 5</button>
    </div>
  )
}
