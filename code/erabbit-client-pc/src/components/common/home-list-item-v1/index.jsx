import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { changeCurrentGoodsAction } from "@/store/modules/main";

import { HomeListItemV1Wrapper } from "./style";

const HomeListItemV1 = memo((props) => {
  const { dataInfo } = props;

  // ?处理goodsItem点击
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleGoodsItemClick() {
    localStorage.setItem("CurrentGoods", JSON.stringify(dataInfo));
    dispatch(changeCurrentGoodsAction(dataInfo));
    navigate(`/detail/${dataInfo.id}`);
  }

  return (
    <HomeListItemV1Wrapper>
      <div className="picture" onClick={() => handleGoodsItemClick()}>
        <img src={dataInfo.picture} alt="" />
      </div>
      <div className="descriptions" onClick={() => handleGoodsItemClick()}>
        <div className="desc-cont omit">{dataInfo.name || dataInfo.title}</div>
        {dataInfo.price && <div className="desc-price">￥{dataInfo.price}</div>}
        {dataInfo.alt && <div className="desc-alt">{dataInfo.alt}</div>}
      </div>
    </HomeListItemV1Wrapper>
  );
});

HomeListItemV1.propTypes = {
  dataInfo: PropTypes.object,
};

export default HomeListItemV1;
