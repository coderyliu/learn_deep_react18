import PropTypes from "prop-types";
import React, { memo } from "react";

import { HomeListItemV2Wrapper } from "./style";

const HomeListItemV2 = memo((props) => {
  const { dataInfo } = props;

  // ?处理商品item的点击
  function handleItemGoodsClick(){
    console.log(dataInfo.id)
  }

  return (
    <HomeListItemV2Wrapper>
      <div className="picture" onClick={()=>handleItemGoodsClick()}>
        <img src={dataInfo.picture} alt="" />
      </div>
      <div className="content">
        <div className="name omit2">{dataInfo.name}</div>
        <div className="desc omit">{dataInfo.desc}</div>
        <div className="price">￥{dataInfo.price}</div>
      </div>
      <div className="bottom-tip">
        <p className='find-more'>找相似</p>
        <p className="find-goods">发现更多宝贝 &gt;</p>
      </div>
    </HomeListItemV2Wrapper>
  );
});

HomeListItemV2.propTypes = {
  dataInfo: PropTypes.object,
};

export default HomeListItemV2;
