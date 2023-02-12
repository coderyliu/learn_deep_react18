import React, { memo, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";

import routes from "./router";
import { fetchBannerData } from "./store/modules/home";

import AppHeader from "./components/common/app-header";
import AppFooter from "./components/common/app-footer";
import { AppWrapper } from "./style";

const App = memo(() => {
  // 请求轮播图数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBannerData());
  }, [dispatch]);

  return (
    <AppWrapper>
      <AppHeader></AppHeader>
      {useRoutes(routes)}
      <AppFooter></AppFooter>
    </AppWrapper>
  );
});

export default App;
