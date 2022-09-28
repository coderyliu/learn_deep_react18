import React, { memo } from "react";
import { useState } from "react";

const App = memo(() => {
  // ?我们先来看一个简单的例子，来了解useCallback 这个Hook的目的-->性能优化
  const [counter, setCounter] = useState(0);

  // todo 我们每一次去+1的时候，都会重新渲染函数式组件，那么函数式组件就会重新执行（自上而下）
  // todo 函数在执行的时候，increment函数就会重新被创建，重新被定义，每一次都是这样，这样就有可能造成内存泄漏
  // todo 尽管浏览器有垃圾回收机制，但是每次渲染重新执行函数，每次都会创建新的函数，这样是不友好的
  // todo 所以就有了useCallback这个Hook
  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increment}>+1</button>
    </div>
  );
});

export default App;
