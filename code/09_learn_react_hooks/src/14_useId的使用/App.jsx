import React, { memo, useId, useState } from "react";

// ?useId的使用是生成一个唯一的id，通常用在服务端渲染这
const App = memo(() => {
  const [counter, setCounter] = useState(0);

  const id = useId();
  console.log(id);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
});

export default App;
