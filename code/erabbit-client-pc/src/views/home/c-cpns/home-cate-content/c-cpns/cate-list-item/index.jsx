import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import { CateListItemWrapper } from "./style";

const CateListItem = memo((props) => {
  const { dataInfo } = props;

  // ?商品item点击
  const navigate = useNavigate();
  function handleGoodsItemClick() {
    navigate(`/detail/${dataInfo.id}`);
  }

  return (
    <CateListItemWrapper>
      <div className="item-wrap" onClick={() => handleGoodsItemClick()}>
        <div className="left-cont">
          <img src={dataInfo.picture} alt="" />
        </div>
        <div className="right-cont">
          <p className="name omit">{dataInfo.name}</p>
          <p className="desc omit">{dataInfo.desc}</p>
          <p className="price">
            <span className="sign">￥</span>
            {dataInfo.price}
          </p>
        </div>
      </div>
    </CateListItemWrapper>
  );
});

CateListItem.propTypes = {
  dataInfo: PropTypes.object,
};

export default CateListItem;
