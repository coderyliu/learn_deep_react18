import React, { memo } from "react";
import { useState } from "react";

const App = memo(() => {
  // ?useReducer的这个Hook出现主要是为了帮助我们管理函数式组件复杂的状态State
  // todo 比如，我们使用State Hook的时候

  // ?这个函数式组件中的状态可能非常多，那我们就要每次都useState()去管理状态
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("hello coderyliu");

  return (
    <div>
      <h2>App Counter {counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <h1>{message}</h1>
      <button onClick={(e) => setMessage("你好啊，李银河")}>修改信息</button>
    </div>
  );
});

export default App;
