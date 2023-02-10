import PropTypes from "prop-types";
import React, { memo } from "react";

import { HomeHeaderV1Wrapper } from "./style";

const HomeHeaderV1 = memo((props) => {
  const { title, desc, isShowTotal = false } = props;

  // ?点击查看更多
  function handleShowMoreClick(){
    console.log('查看更多');
  }

  return (
    <HomeHeaderV1Wrapper>
      <div className="left">
        <div className="content">
          <h2 className="header-title">{title}</h2>
          <p className="header-desc">{desc}</p>
        </div>
        <div className="category">{props.children}</div>
      </div>
      {isShowTotal && <div className="right" onClick={()=>handleShowMoreClick()}>查看全部 &gt;</div>}
    </HomeHeaderV1Wrapper>
  );
});

HomeHeaderV1.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  isShowTotal: PropTypes.bool,
};

export default HomeHeaderV1;
