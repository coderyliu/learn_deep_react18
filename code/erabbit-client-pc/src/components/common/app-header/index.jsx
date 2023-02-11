import React, { memo, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { useScrollPosition } from "@/hooks";
import { AppHeaderList } from "@/common";

import { AppHeaderWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";

const AppHeader = memo(() => {
  // state状态
  const [inputValue, setInputValue] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  // ?监听scroll滚动
  useScrollPosition();
  
  const { isFixedHeader } = useSelector(
    (state) => ({
      isFixedHeader: state.main.isFixedHeader,
    }),
    shallowEqual
  );

  // ?处理头部item点击
  function handleItemClick(data, index) {
    setActiveIndex(index);

    if (data.id === 0) {
      navigate("/home");
      return;
    }

    navigate(`/category/${data.id}`);
  }

  // ?跳转至首页
  function navigateToHome() {
    navigate("/home");
  }

  // ?输入框受控
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  // ?点击搜索按钮搜索
  function handleSearchClick() {
    console.log(inputValue);
  }

  // ?处理刷新改变index
  useEffect(() => {
    const pathname = location.pathname;
    switch (pathname) {
      case "/home":
        setActiveIndex(0);
        break;
      case "/category/1005000":
        setActiveIndex(1);
        break;
      case "/category/1005002":
        setActiveIndex(2);
        break;
      case "/category/1010000":
        setActiveIndex(3);
        break;
      case "/category/1011000":
        setActiveIndex(4);
        break;
      case "/category/1013001":
        setActiveIndex(5);
        break;
      case "/category/1019000":
        setActiveIndex(6);
        break;
      case "/category/1043000":
        setActiveIndex(7);
        break;
      case "/category/109243029":
        setActiveIndex(8);
        break;
      case "/category/19999999":
        setActiveIndex(9);
        break;
      default:
        setActiveIndex(10);
    }
  }, [location.pathname]);

  return (
    <AppHeaderWrapper headerHeight={isFixedHeader}>
      <div className="app-header-wrap">
        <div className="head-left">
          <h1 className="app-logo" onClick={() => navigateToHome()}>
            小兔鲜
          </h1>
          <ul className="head-list">
            {AppHeaderList.map((item, index) => {
              return (
                <li
                  key={item.id}
                  onClick={() => handleItemClick(item, index)}
                  className={activeIndex === index ? "item active" : "item"}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
        {!isFixedHeader && (
          <div className="head-right">
            <div className="left">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => handleInputChange(e)}
                className="search"
              />
              <SearchOutlined
                onClick={() => {
                  handleSearchClick();
                }}
              />
            </div>

            <div className="right">
              <ShoppingCartOutlined />
            </div>
          </div>
        )}
        {isFixedHeader && (
          <ul className="head-right">
            <li className="gap"> | </li>
            <li className="brand">品牌</li>
            <li className="special">专题</li>
          </ul>
        )}
      </div>
    </AppHeaderWrapper>
  );
});

export default AppHeader;
