import React, { memo } from "react";
import { useTransition } from "react";
import { useState } from "react";
import namesArr from "./generateData";

// ?useTransition的作用：主要是让某些操作的优先级变低，比如下面这个例子的使用场景
const App = memo(() => {
  const [showNames, setShowNames] = useState(namesArr);
  // ?当我们对输入框的关键字过滤的时候，过滤的操作会耗时，这时候如果列表数据过多，那么会造成页面卡顿
  // ?这个useTransition就是进行性能优化的，让过滤的操作的优先级变低，先更新页面
  const [pending, startTransition] = useTransition();

  function handleInput(e) {
    startTransition(() => {
      const key = e.target.value;
      const fullNamesArr = namesArr.filter((item) => item.includes(key));
      setShowNames(fullNamesArr);
    });
    // console.log(e.target.value);
  }

  return (
    <div>
      <input type="text" onInput={handleInput} />
      <br />
      <ul>
        <h2>用户列表:{pending&&<span>data Loading</span>}</h2>
        {showNames.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
});

export default App;
