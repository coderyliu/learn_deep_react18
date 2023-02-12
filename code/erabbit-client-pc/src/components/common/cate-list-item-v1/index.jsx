import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import { CateListItemV1Wrapper } from "./style";

const CateListItemV1 = memo((props) => {
  const { dataInfo } = props;

  // ?处理商品item点击
  const navigate=useNavigate()
  function handleGoodsItemClick(){
    navigate(`/detail/${dataInfo.id}`)
  }

  return (
    <CateListItemV1Wrapper>
      <div className="item-wrap" onClick={() => handleGoodsItemClick()}>
        <div className="top-cover">
          <img src={dataInfo.picture} alt="" />
        </div>
        <div className="bottom-info">
          <p className="name omit">{dataInfo.name}</p>
          <p className="desc omit">{dataInfo.desc}</p>
          <p className="price omit">￥{dataInfo.price}</p>
        </div>
      </div>
    </CateListItemV1Wrapper>
  );
});

CateListItemV1.propTypes = {
  dataInfo: PropTypes.object,
};

export default CateListItemV1;
