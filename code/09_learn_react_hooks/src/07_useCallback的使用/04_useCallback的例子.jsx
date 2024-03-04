import React, { memo } from "react";
import { useRef } from "react";
import { useCallback, useState } from "react";

// ?一个useCallback的例子，优化点：在于如果我们的函数需要传递给给子组件，那么这时候我们可以使用useCallback()返回的函数，传递给子组件
// ?这样可以优化函数性能
const HelloWorld = memo((props) => {
  function increment() {
    props.increment();
  }
  console.log("home component");

  return (
    <div>
      <button onClick={increment}>父组件counter+1</button>
    </div>
  );
});

const App = memo(() => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("hello react");

  const increment = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <div>
      <h2>
        {counter}-{message}
      </h2>
      <button onClick={increment}>+1</button>
      <button onClick={() => setMessage("hello coderyliu")}>修改信息</button>
      <HelloWorld increment={increment}></HelloWorld>
    </div>
  );
});

export default App;
