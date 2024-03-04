import React, { memo, useEffect } from "react";
import { useState } from "react";

const App = memo(() => {
  // useEffect()函数的第二个参数是一个数组，这个数组决定你的useEffect()函数的第一个参数的回调函数什么时候执行
  // ?如果是一个空数组，那么这个useEffect不依靠任何来决定，只会在第一次函数式组件被挂载DOM的时候立即执行
  // ?[counter],这样，说明这个useEffect依靠counter这个state的变化

  const [counter, setCounter] = useState(0);

  // ?useEffect这个hook可以在函数式组件中调用多次，可以有多个useEffect Hook，这样可以帮助我们减少业务逻辑代码的复杂度
  // ?多个useEffect Hook按照顺序执行

  // todo 1.这个Hook只修改title,由counter来决定
  useEffect(() => {
    document.title = counter;

    console.log(counter);
  }, [counter]);

  // todo 2.这个Hook订阅redux
  // ?传递一个空数组，则表示没有控制，则这个useEffect只会执行一次
  useEffect(() => {
    // 1.订阅redux
    // const unsubscribe=store.subscribe(()=>{})
    console.log("订阅redux");

    return () => {
      console.log("取消订阅redux");
    };
  }, []);

  // todo 3.这个Hook只订阅eventBus
  useEffect(() => {
    // 2.事件总线
    // function foo(){}
    // emit.on('coder',foo)

    console.log("订阅eventBus");
    return () => {
      // emit.off()
      console.log("取消订阅eventBus");
    };
  }, []);

  // todo 4.这个Hook这份送网络请求---[],那么这个Effect就只会执行一次，放一次网络请求
  useEffect(() => {
    // 3.网络请求
    // axios.get('')
  }, []);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
});

export default App;
