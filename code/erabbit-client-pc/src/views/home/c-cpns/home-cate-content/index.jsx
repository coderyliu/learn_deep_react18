import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { RightOutlined } from "@ant-design/icons";

import { changeIsShowBannerControlAction } from "@/store/modules/home";

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
  function handleCateItemMove(isShow, item) {
    if (isShow) {
      setIsShowRightField(isShow);
      setCurrentData(item);

      dispatch(changeIsShowBannerControlAction(false));
    } else {
      setIsShowRightField(isShow);
      dispatch(changeIsShowBannerControlAction(true));
    }
  }

  return (
    <HomeCateContentWrapper isHavePadding={isFixedHeader}>
      <div
        className="outer-wrap"
        onMouseLeave={() => handleCateItemMove(false)}
      >
        <ul className="left-cont-wrap">
          {cateList?.map((item) => {
            return (
              <li
                key={item.id}
                className="item"
                onMouseEnter={() => handleCateItemMove(true, item)}
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
                <li key={childItem.id} className="iten">
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
