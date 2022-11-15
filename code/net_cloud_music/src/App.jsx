import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";

import routes from "./router";
import { changeTokenAction } from "./store/modules/main";

import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import AppPlayerBar from "./views/player/app-player-bar";
import { AppWrapper } from "./style";
import VipModal from "./components/vip-modal";
import { changeCurrentSealDataAction } from "./store/modules/menu";

const App = memo(() => {
  // token数据持久化
  const dispatch = useDispatch();
  dispatch(changeTokenAction(localStorage.getItem("token")));
  dispatch(
    changeCurrentSealDataAction(JSON.parse(localStorage.getItem("curSeal")))
  );

  return (
    <AppWrapper>
      <AppHeader></AppHeader>
      <div className="content">{useRoutes(routes)}</div>
      <AppFooter></AppFooter>
      <AppPlayerBar></AppPlayerBar>
      <VipModal></VipModal>
    </AppWrapper>
  );
});

export default App;
