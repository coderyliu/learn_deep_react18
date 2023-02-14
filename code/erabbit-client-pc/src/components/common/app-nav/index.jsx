import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MobileOutlined, UserOutlined } from "@ant-design/icons";

import {
  changeIsLoginAction,
  changeUserInfoAction,
} from "@/store/modules/main";
import { appNavList } from "@/common";

import { AppNavWrapper } from "./style";
import { logoutApp } from "@/api/modules/log";

const AppNav = memo((props) => {
  const { isLogin, userInfo } = props;

  // ?处理nav-item点击
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleNavItemClick(item) {
    switch (item.title) {
      case "请先登录":
        navigate("/login");
        break;
      case "免费注册":
        navigate("/login");
        break;
      case "个人中心":
        navigate("/mine");
        break;
      case "退出登录":
        logoutApp().then((res) => {
          if (res.code === 200) {
            dispatch(changeIsLoginAction(false));
            dispatch(changeUserInfoAction({}));
            localStorage.removeItem("token");
            localStorage.removeItem("userInfo");
            navigate("/home");
          }
        });
        break;
      default:
        navigate(item.path);
        break;
    }
  }

  return (
    <AppNavWrapper>
      <ul className="app-nav-wrap">
        <li className="gap"></li>
        {!isLogin && (
          <li
            className="item"
            onClick={() => handleNavItemClick({ title: "请先登录" })}
          >
            请先登录
          </li>
        )}
        {!isLogin && (
          <li
            className="item"
            onClick={() => handleNavItemClick({ title: "免费注册" })}
          >
            免费注册
          </li>
        )}
        {isLogin && (
          <li
            className="item"
            onClick={() => handleNavItemClick({ title: "个人中心" })}
          >
            <UserOutlined />
            &nbsp;
            {userInfo.name||userInfo.account}
          </li>
        )}
        {isLogin && (
          <li
            className="item"
            onClick={() => handleNavItemClick({ title: "退出登录" })}
          >
            退出登录
          </li>
        )}
        {appNavList.map((item) => {
          return (
            <li
              key={item.title}
              className="item"
              onClick={() => handleNavItemClick(item)}
            >
              {item.title}
            </li>
          );
        })}
        <li className="item">
          <MobileOutlined />
          手机版
        </li>
      </ul>
    </AppNavWrapper>
  );
});

AppNav.propTypes = {
  isLogin: PropTypes.bool,
};

export default AppNav;
