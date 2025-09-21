import React, { createContext }from "react";

export const CounterContext = createContext();

export default function CounterUsingUseContext({children}) {
  const [counter, setCounter] = React.useState(0);
  return (
    <CounterContext.Provider value={{counter,setCounter}}>
      {children}
    </CounterContext.Provider>
  );
}
