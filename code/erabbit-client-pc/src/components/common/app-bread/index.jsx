import React, { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

import { AppBreadWrapper } from "./style";

const AppBread = memo(() => {
  // ?redux相关
  const { currentCate, currentSubCate, currentGoods } = useSelector(
    (state) => ({
      currentCate: state.main.currentCate,
      currentSubCate: state.main.currentSubCate,
      currentGoods: state.main.currentGoods,
    }),
    shallowEqual
  );

  const location = useLocation();

  // ?处理面包屑的点击
  const navigate = useNavigate();
  function handleBreadItemClick(type) {
    switch (type) {
      case "first":
        navigate("/home");
        break;
      case "second":
        navigate(`/category/${currentCate.id}`);
        break;
      case "third":
        navigate(`/category/sub/${currentSubCate.id}`);
        break;
      case "four":
        navigate(`/detail/${currentGoods.id}`);
        break;
      default:
        break;
    }
  }

  return (
    <AppBreadWrapper>
      <div className="app-bread-wrap">
        <span
          className="bread-item"
          onClick={() => handleBreadItemClick("first")}
        >
          首页
        </span>
        <span
          className="bread-item"
          onClick={() => handleBreadItemClick("second")}
        >
          &nbsp;&nbsp;&gt; {currentCate?.title}
        </span>
        {(location.pathname.includes("sub") ||
          location.pathname.includes("detail")) && (
          <span
            className="bread-item"
            onClick={() => handleBreadItemClick("third")}
          >
            &nbsp;&nbsp;&gt; {currentSubCate?.name}
          </span>
        )}
        {location.pathname.includes("detail") && (
          <span
            className="bread-item"
            onClick={() => handleBreadItemClick("four")}
          >
            &nbsp;&nbsp;&gt; {currentGoods?.name}
          </span>
        )}
      </div>
    </AppBreadWrapper>
  );
});

export default AppBread;
