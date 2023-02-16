import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { changeCurrentSubCateAction } from "@/store/modules/main";

import { AppHeaderModalWrapper } from "./style";

const AppHeaderModal = memo((props) => {
  const {
    isShowTitle = true,
    totalCateList,
    isFixedLayout = false,
    isFixedHeader,
  } = props;

  // ?点击跳转至分类页
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleCateItemClick(data) {
    localStorage.setItem("currentSubCate", JSON.stringify(data));
    dispatch(changeCurrentSubCateAction(data));
    navigate(`/category/sub/${data.id}`);
  }

  return (
    <AppHeaderModalWrapper
      isFixedLayout={isFixedLayout}
      isFixedHeader={isFixedHeader}
    >
      {isShowTitle && <h2 className="header-top">全部分类</h2>}
      <ul className="total-cate">
        {totalCateList?.map((item) => {
          return (
            <li
              key={item.id}
              className="total-cate-item"
              onClick={() => handleCateItemClick(item)}
            >
              <img src={item.picture} alt="" />
              <p className="item-name omit">{item.name}</p>
            </li>
          );
        })}
      </ul>
    </AppHeaderModalWrapper>
  );
});

AppHeaderModal.propTypes = {
  isShowTitle: PropTypes.bool,
  isFixedLayout: PropTypes.bool,
  totalCateList: PropTypes.array,
};

export default AppHeaderModal;
