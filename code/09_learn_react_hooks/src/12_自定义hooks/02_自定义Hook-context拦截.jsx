import React, { memo, useContext } from "react";
import { UserContext, ThemeContext } from "./context";
import useUserInfo from "./hooks/useUserInfo";

// ?假如现在我们的userInfo和token需要保存起来，那么这时候可能需要在每一个组件中使用
// ?如果我们在每一个组件中都使用，写起来非常不方便，这个时候我们可以使用hook
const Home = memo(() => {
  // const userInfo=useContext(UserContext)
  // const theme=useContext(ThemeContext)
  const userInfo = useUserInfo();

  return (
    <div>
      <h2>Home Page</h2>
      <h2>
        个人信息:{userInfo.name}-{userInfo.age}
      </h2>
    </div>
  );
});

const App = memo(() => {
  // const userInfo=useContext(UserContext)
  const userInfo = useUserInfo();

  return (
    <div>
      <h2>App Page</h2>
      <h2>
        个人信息:{userInfo.name}-{userInfo.age}
      </h2>
      <hr />
      <Home></Home>
    </div>
  );
});

export default App;
