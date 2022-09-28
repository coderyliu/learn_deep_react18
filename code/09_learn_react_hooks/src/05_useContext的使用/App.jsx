import React, { memo } from "react";
import HelloWorld from "./01_函数式组件Context的使用-Consumer组件";
import HelloWorld2 from "./02_函数式组件Context的使用-ContextHook";

const App = memo(() => {
  return (
    <div>
      <h2>App page</h2>
      <HelloWorld></HelloWorld>
      <HelloWorld2></HelloWorld2>
    </div>
  );
});

export default App;
