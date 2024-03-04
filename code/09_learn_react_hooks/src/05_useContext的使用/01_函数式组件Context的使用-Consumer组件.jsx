import React, { memo } from "react";
import { ThemeContext, UserContext } from "./context";

const HelloWorld = memo(() => {
  return (
    <div>
      <h2>Child Page</h2>
      <ThemeContext.Consumer>
        {(value) => {
          return (
            <h2 style={{ color: value.color, fontSize: value.size }}>
              你好啊，李银河
            </h2>
          );
        }}
      </ThemeContext.Consumer>
      <UserContext.Consumer>
        {(value) => {
          return (
            <h2>
              {value.name}-{value.age}
            </h2>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
});

export default HelloWorld;
