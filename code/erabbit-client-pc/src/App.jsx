import React, { memo, useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import routes from "./router";
import { fetchBannerData } from "./store/modules/home";
// import { changeIsLoginAction } from "./store/modules/main";

import AppNav from "./components/common/app-nav";
import AppHeader from "./components/common/app-header";
import AppFooter from "./components/common/app-footer";
import { AppWrapper } from "./style";

const App = memo(() => {
  const location = useLocation();

  // ?判断登录状态
  const { isLogin, userInfo } = useSelector(
    (state) => ({
      isLogin: state.main.isLogin,
      userInfo: state.main.userInfo,
    }),
    shallowEqual
  );

  // 请求轮播图数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBannerData());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(changeIsLoginAction(isLogin));
  // }, [dispatch, isLogin]);

  return (
    <AppWrapper>
      {!location.pathname.includes("login") && (
        <AppNav isLogin={isLogin} userInfo={userInfo}></AppNav>
      )}
      {!location.pathname.includes("login") && <AppHeader></AppHeader>}
      {useRoutes(routes)}
      {!location.pathname.includes("login") && <AppFooter></AppFooter>}
    </AppWrapper>
  );
});

export default App;
