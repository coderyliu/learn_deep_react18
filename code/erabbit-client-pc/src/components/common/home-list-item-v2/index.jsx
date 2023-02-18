import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { changeCurrentGoodsAction } from "@/store/modules/main";

import { HomeListItemV2Wrapper } from "./style";

const HomeListItemV2 = memo((props) => {
  const { dataInfo } = props;

  // ?处理商品item的点击
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleItemGoodsClick() {
    localStorage.setItem("currentGoods", JSON.stringify(dataInfo));
    dispatch(changeCurrentGoodsAction(dataInfo));
    navigate(`/detail/${dataInfo.id}`);
  }

  // ?处理发现更多点击
  function handleFindMoreClick(){
    console.log('find more')
  }

  return (
    <HomeListItemV2Wrapper>
      <div className="picture" onClick={() => handleItemGoodsClick()}>
        <img src={dataInfo.picture} alt="" />
      </div>
      <div className="content">
        <div className="name omit2">{dataInfo.name}</div>
        <div className="desc omit">{dataInfo.desc}</div>
        <div className="price">￥{dataInfo.price}</div>
      </div>
      <div className="bottom-tip" onClick={()=>handleFindMoreClick()}>
        <p className="find-more">找相似</p>
        <p className="find-goods">发现更多宝贝 &gt;</p>
      </div>
    </HomeListItemV2Wrapper>
  );
});

HomeListItemV2.propTypes = {
  dataInfo: PropTypes.object,
};

export default HomeListItemV2;
