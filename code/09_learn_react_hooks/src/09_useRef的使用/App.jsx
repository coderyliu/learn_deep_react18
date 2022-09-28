import React, { memo, useRef } from "react";
import { useCallback } from "react";
import { useState,useEffect } from "react";

// ?useRef有两个作用
// 1.能够像在类组件中一样，通过createRef获取DOM引用
// 2.由于useRef每次返回的都是同一个对象，我们可以用来保存上次函数式组件执行体内的某些内容
let obj = null;
const App = memo(() => {
  // todo 1.验证useRef每次返回的对象都是一样的
  const [counter, setCounter] = useState(0);

  let titleRef = useRef();
  console.log(obj === titleRef);
  obj = titleRef;

  // todo 2.获取DOM引用
  useEffect(()=>{
    console.log(titleRef.current);
  },[counter])

  // todo 3.解决闭包问题，保留上一次的引用
  const counterRef=useRef()
  counterRef.current=counter
  const increment=useCallback(()=>{
    setCounter(counterRef.current+1)
  },[])

  return (
    <div>
      <h2 ref={titleRef}>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={increment}>+1</button>
    </div>
  );
});

export default App;
