import React, { memo, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import headerTitle from "@/assets/data/header-title.json";

import headerNav from "@/assets/data/header-nav.json";
import { AppHeaderWrapper } from "./style";

const AppHeader = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [findIndex, setFindIndex] = useState(0);

  // 处理首页导航
  const location = useLocation();

  // 路由跳转
  const navigate = useNavigate();
  // ?顶部导航路由跳转
  function navigateTo(path, index) {
    setCurrentIndex(index);
    if (!path.isUrl) {
      navigate(path.path);
    }
  }

  // ?发现页导航跳转
  function handleRecClick(path, index) {
    navigate(path);
    setFindIndex(index);
  }

  // ?处理href改变
  useEffect(()=>{
    if(location.pathname==='/discover/recommend'){
      setFindIndex(0)
    }
  },[location])

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
          <div className="login">登录</div>
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
    </AppHeaderWrapper>
  );
});

export default AppHeader;
