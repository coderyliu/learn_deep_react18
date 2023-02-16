import React, { memo, useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import routes from "./router";
import { changeAllCateDataAction, fetchBannerData } from "./store/modules/home";
// import { changeIsLoginAction } from "./store/modules/main";
import {
  changeCurrentCateAction,
  changeCurrentGoodsAction,
  changeCurrentSubCateAction,
  changeIsLoginAction,
  changeUserInfoAction,
} from "./store/modules/main";

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

  // ?token以及storage中的数据状态持久化
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const currentCate = JSON.parse(localStorage.getItem("currentCate"));
    const currentSubCate = JSON.parse(localStorage.getItem("currentSubCate"));
    const currentGoods = JSON.parse(localStorage.getItem("currentGoods"));
    const allCateData = JSON.parse(localStorage.getItem("allCateData"));

    if (!token) {
      dispatch(changeIsLoginAction(false));
      dispatch(changeUserInfoAction({}));
    } else {
      dispatch(changeIsLoginAction(true));
      dispatch(changeUserInfoAction(userInfo));
    }

    dispatch(changeCurrentCateAction(currentCate));
    dispatch(changeCurrentSubCateAction(currentSubCate));
    dispatch(changeCurrentGoodsAction(currentGoods));
    dispatch(changeAllCateDataAction(allCateData));
  }, [dispatch]);

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
