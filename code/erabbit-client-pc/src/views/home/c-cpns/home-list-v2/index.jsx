import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import HomeHeaderV1 from "@/components/common/home-header-v1";
import HomeListItemV2 from "@/components/common/home-list-item-v2";
import { HomeListV2Wrapper } from "./style";

const HomeListV2 = memo((props) => {
  const { listInfo, title, isShowTotal, children } = props;

  // ?处理图片封皮点击
  const navigate = useNavigate();
  function handleCoveredClick() {
    navigate(`/category/${listInfo.id}`);
  }

  return (
    <HomeListV2Wrapper>
      <HomeHeaderV1 title={title} isShowTotal={isShowTotal}>
        {children}
      </HomeHeaderV1>
      <div className="content-list">
        <div className="left-cont" onClick={() => handleCoveredClick()}>
          <div className="covered">
            <img src={listInfo.picture} alt="" />
          </div>
          <div className="tip-wrap">
            <span className="subtitle">{title + "馆"}</span>
            <span className="welfare">大额优惠 等</span>
            <p className="take-thing">你来拿</p>
          </div>
        </div>
        <div className="right-cont">
          {listInfo?.goods?.map((item) => {
            return (
              <HomeListItemV2 dataInfo={item} key={item.id}></HomeListItemV2>
            );
          })}
        </div>
      </div>
    </HomeListV2Wrapper>
  );
});

HomeListV2.propTypes = {
  listInfo: PropTypes.object,
  title: PropTypes.string,
  isShowTotal: PropTypes.bool,
};

export default HomeListV2;
