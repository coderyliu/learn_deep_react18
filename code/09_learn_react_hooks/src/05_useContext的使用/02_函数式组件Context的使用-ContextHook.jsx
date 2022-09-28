import React, { memo, useContext } from "react";
import { ThemeContext, UserContext } from "./context";

const HelloWorld2 = memo(() => {
  // ?Context Hook提供给我们更简单方便的使用方式使用context
  // ?注意，当最外层的Provider的value变化了，那么相应的Consumer/Context Hook的函数式组件也会重新渲染
  const themeObj = useContext(ThemeContext);
  const userObj = useContext(UserContext);

  return (
    <div>
      <h2>Child Page</h2>
      <h2 style={{ color: themeObj.color, fontSize: themeObj.size }}>
        你好啊。李银河
      </h2>
      <h2>
        {userObj.name}-{userObj.age}
      </h2>
    </div>
  );
});

export default HelloWorld2;
