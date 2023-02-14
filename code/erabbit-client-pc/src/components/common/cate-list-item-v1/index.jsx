import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import { CateListItemV1Wrapper } from "./style";

const CateListItemV1 = memo((props) => {
  const {
    dataInfo,
    isShowDesc = true,
    isTriggerHover=true,
    wrapWidth = 160,
    wrapHeight = 260,
    imgWidth = 160,
    imgHeight = 160,
    nameColor = 333,
    bgColor
  } = props;

  // ?处理商品item点击
  const navigate = useNavigate();
  function handleGoodsItemClick() {
    navigate(`/detail/${dataInfo.id}`);
  }

  return (
    <CateListItemV1Wrapper
      isTriggerHover={isTriggerHover}
      wrapWidth={wrapWidth}
      wrapHeight={wrapHeight}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      nameColor={nameColor}
      bgColor={bgColor}
    >
      <div className="item-wrap" onClick={() => handleGoodsItemClick()}>
        <div className="top-cover">
          <img src={dataInfo.picture} alt="" />
        </div>
        <div className="bottom-info">
          <p className="name omit">{dataInfo.name}</p>
          {isShowDesc && <p className="desc omit">{dataInfo.desc}</p>}
          <p className="price omit">￥{dataInfo.price}</p>
        </div>
      </div>
    </CateListItemV1Wrapper>
  );
});

CateListItemV1.propTypes = {
  dataInfo: PropTypes.object,
  isShowDesc: PropTypes.bool,
  isTriggerHover:PropTypes.bool,
  wrapWidth: PropTypes.number,
  wrapHeight: PropTypes.number,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
  nameColor: PropTypes.number,
  bgColor: PropTypes.string,
};

export default CateListItemV1;
