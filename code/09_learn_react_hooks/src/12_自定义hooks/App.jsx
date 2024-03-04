import React, { memo } from "react";
import useLocalStorage from "./hooks/useLocalstorage";

// ?假如，有些东西我们要放在localStorage中，那么这时候我们也可以利用hook来做一个封装
const App = memo(() => {
  const [token, setToken] = useLocalStorage("token");

  return (
    <div>
      <h2>App Page-{token}</h2>
      <button onClick={() => setToken("curry")}>设置token</button>
    </div>
  );
});

export default App;
