import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

import { changeIsShowBannerControlAction } from "@/store/modules/home";
import {
  changeCurrentCateAction,
  changeCurrentSubCateAction,
} from "@/store/modules/main";

import CateListItem from "./c-cpns/cate-list-item";
import { HomeCateContentWrapper } from "./style";

const HomeCateContent = memo((props) => {
  // ?state状态
  const [currentData, setCurrentData] = useState({});
  const [isShowRightField, setIsShowRightField] = useState(false);
  const rightFieldRef = useRef();

  const { cateList, isFixedHeader } = props;

  // ?处理分类项移入
  const dispatch = useDispatch();
  function handleCateItemMove(isShow, item, index) {
    if (isShow) {
      setIsShowRightField(isShow);
      setCurrentData(item);

      const cate = {
        title: cateList[index]["name"],
        id: cateList[index]["id"],
      };

      localStorage.setItem("currentCate", JSON.stringify(cate));
      dispatch(changeCurrentCateAction(cate));
      dispatch(changeIsShowBannerControlAction(false));
    } else {
      setIsShowRightField(isShow);
      dispatch(changeIsShowBannerControlAction(true));
    }
  }

  // ?处理二级分类点击
  const navigate = useNavigate();
  function handleSubCateItemClick(data) {
    localStorage.setItem("currentSubCate", JSON.stringify(data));
    dispatch(changeCurrentSubCateAction(data));
    navigate(`/category/sub/${data.id}`);
  }

  return (
    <HomeCateContentWrapper isHavePadding={isFixedHeader}>
      <div
        className="outer-wrap"
        onMouseLeave={() => handleCateItemMove(false)}
      >
        <ul className="left-cont-wrap">
          {cateList?.map((item, index) => {
            return (
              <li
                key={item.id}
                className="item"
                onMouseEnter={() => handleCateItemMove(true, item, index)}
              >
                <span className="cate-name">{item.name}</span>
                <RightOutlined />
              </li>
            );
          })}
        </ul>
        <div
          ref={rightFieldRef}
          className={
            isShowRightField ? "right-cont-wrap active" : "right-cont-wrap"
          }
        >
          <ul className="top-cont">
            {currentData?.children?.map((childItem) => {
              return (
                <li
                  key={childItem.id}
                  className="iten"
                  onClick={() => handleSubCateItemClick(childItem)}
                >
                  <img src={childItem.picture} alt="" />
                  <p className="name omit">{childItem.name}</p>
                </li>
              );
            })}
          </ul>
          <div className="bottom-cont">
            {currentData?.goods?.map((goodsItem) => {
              return (
                <CateListItem
                  dataInfo={goodsItem}
                  key={goodsItem.id}
                ></CateListItem>
              );
            })}
          </div>
        </div>
      </div>
    </HomeCateContentWrapper>
  );
});

HomeCateContent.propTypes = {
  cateList: PropTypes.array,
};

export default HomeCateContent;
