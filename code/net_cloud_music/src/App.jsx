import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";

import routes from "./router";
import { changeTokenAction } from "./store/modules/main";

import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import { AppWrapper } from "./style";

const App = memo(() => {
  // token数据持久化
  const dispatch = useDispatch();
  dispatch(changeTokenAction(localStorage.getItem("token")));

  return (
    <AppWrapper>
      <AppHeader></AppHeader>
      <div className="content">{useRoutes(routes)}</div>
      <AppFooter></AppFooter>
    </AppWrapper>
  );
});

export default App;
