import React, { memo } from "react";
import { useRef } from "react";
import { useCallback, useState } from "react";

const App = memo(() => {
  // ?我们先来看一个简单的例子，来了解useCallback 这个Hook的目的-->性能优化
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("hello react");

  // ?这里有个重要的点，闭包
  // 如果第二个参数是一个空数组，那么表示这个useCallback不受任何影响，函数式组件在执行的时候，increment还是是使用上次的foo1
  // ?但是,和下面的这个例子一样
  // function bar(name){
  //   function foo(){
  //     console.log(name);
  //   }

  //   return foo
  // }

  // const bar1=bar('why')
  // bar1() //why

  // const bar2=foo('coder')
  // bar2() //coder

  // bar1() //why
  // todo 这时候+1,操作一直是1,因为就是闭包的原因造成上面bar1的函数的结果
  // ?解决办法，通过useRef这个Hook useRef不论函数重新执行多少次，返回的都是同一个对象
  const counterRef = useRef();
  counterRef.current = counter;
  const increment = useCallback(() => {
    console.log("函数又被重新执行了");
    setCounter(counterRef.current + 1);
  }, []);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increment}>+1</button>
      <h2>{message}</h2>
      <button onClick={() => setMessage("你好啊，李银河")}>修改信息</button>
    </div>
  );
});

export default App;
