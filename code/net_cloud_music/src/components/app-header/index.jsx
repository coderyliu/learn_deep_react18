import React, { memo, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import headerTitle from "@/assets/data/header-title.json";
import headerNav from "@/assets/data/header-nav.json";

import LoginModal from "./c-cpns/login-modal";
import { AppHeaderWrapper } from "./style";

const AppHeader = memo(() => {
  // 组件状态
  const [currentIndex, setCurrentIndex] = useState(0);
  const [findIndex, setFindIndex] = useState(0);
  const [isShowLogin, setIsShowLogin] = useState(false);

  // 处理首页导航
  const location = useLocation();

  // 路由跳转
  const navigate = useNavigate();
  // ?顶部导航路由跳转
  function navigateTo(path, index) {
    if (!path.isUrl) {
      setCurrentIndex(index);
      navigate(path.path);
    } else {
      window.open(path.isUrl, "_blank");
    }
  }

  // ?发现页导航跳转
  function handleRecClick(path, index) {
    navigate(path);
    setFindIndex(index);
  }

  // ?处理href改变
  useEffect(() => {
    let pathName = location.pathname;
    switch (pathName) {
      case "/discover/recommend":
        setFindIndex(0);
        break;
      case "/discover/toplist":
        setFindIndex(1);
        break;
      case "/discover/songMenu":
        setFindIndex(2);
        break;
      case "/discover/radio":
        setFindIndex(3);
        break;
      case "/discover/singer":
        setFindIndex(4);
        break;
      case "/discover/disk":
        setFindIndex(5);
        break;
      default:
        setFindIndex(0);
        break;
    }
  }, [location]);

  // ?监听登录按钮点击
  function handleLoginClick() {
    // ?1.某个页面单独处理
    // navigate('/login')

    // ?2.整个modal弹出框
    setIsShowLogin(true);
  }

  // ?登录框的关闭
  const handleCloseClick = useCallback(() => {
    setIsShowLogin(false);
  },[]);

  return (
    <AppHeaderWrapper>
      <div className="header-inner">
        <h1 className="header-left">
          <a href="/">logo</a>
        </h1>
        <ul className="header-center">
          {headerTitle.map((item, index) => {
            return (
              <li
                className={currentIndex === index ? "item active" : "item"}
                onClick={() => navigateTo(item, index)}
                key={item.title}
              >
                <span>{item.title}</span>
                {currentIndex === index && <span className="triangle2"></span>}
              </li>
            );
          })}
        </ul>
        <div className="header-right">
          <div className="search">
            <input
              type="text"
              placeholder="音乐/视频/电台/用户"
              className="input"
            />
          </div>
          <div className="text section">创作者中心</div>
          <div className="login" onClick={() => handleLoginClick()}>
            登录
          </div>
        </div>
        {/* <div className="triangle"></div> */}
      </div>
      {location.pathname.includes("discover") && (
        <div className="recommend-nav">
          <ul className="nav-wrap">
            {headerNav.map((item, index) => {
              return (
                <li
                  key={item.title}
                  className={findIndex === index ? "iten active" : "iten"}
                  onClick={(e) => handleRecClick(item.path, index)}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {isShowLogin && <LoginModal closeClick={handleCloseClick}></LoginModal>}
    </AppHeaderWrapper>
  );
});

export default AppHeader;
