import React, { memo } from "react";
import { useState } from "react";
import { useMemo } from "react";

// ?useMemo也是用来做性能优化的，不过和useCallback不同的是，useMemo是对函数的返回值做性能优化
const App = memo(() => {
  // todo 例子
  // todo 如果我们在函数体内这样用字面量的方式定义了一个对象，那么这个对象在下一次函数重新渲染得时候还会在生成一个新的对象
  // todo 那么这时候每次都在内存新建一个对象，很浪费性能，所以useMemo就是用来优化这个个目的的
  // const user={name:'coder',age:21}

  // ?useMemo是用来对函数的返回值进行优化的,也是第一个参数，是一个函数，不过要返回一个值，也接受第二个参数是一个数组，作用和useCallback一样
  // 我们就可以这样,会发现useMemo的函数执行体只会执行一次
  const [counter, setCounter] = useState(0);
  const user = useMemo(() => {
    console.log("函数重新执行");
    return { name: "coder", age: 21 };
  }, []);

  return (
    <div>
      <h2>
        {user.name}-{user.age}
      </h2>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
});

export default App;
