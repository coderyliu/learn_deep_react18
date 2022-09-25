import React, { memo } from "react";
import { useState } from "react";

const CounterFunction = memo(() => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button>
    </div>
  );
});

export default CounterFunction;
