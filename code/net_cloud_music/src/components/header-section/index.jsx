import PropTypes from "prop-types";
import React, { memo } from "react";

import { HeaderSectionWrapper } from "./style";

const HeaderSection = memo((props) => {
  const { title, moreClick, isShowMore = true, isShowBtn = false,btnClick } = props;

  // 更多点击处理
  function handleMoreClick() {
    moreClick();
  }

  // ?处理选择分类
  function handleSelectClick(){
    btnClick()
  }

  return (
    <HeaderSectionWrapper>
      <div className="section-left">
        <div className="title">{title}</div>
        {isShowBtn && (
          <div className="btn" onClick={() => handleSelectClick()}>
            选择分类
          </div>
        )}
      </div>
      {isShowMore && (
        <div className="section-right">
          <span className="text" onClick={() => handleMoreClick()}>
            更多
          </span>
          <i className="icon"></i>
        </div>
      )}
    </HeaderSectionWrapper>
  );
});

HeaderSection.propTypes = {
  title: PropTypes.string,
  moreClick: PropTypes.func,
  isShowMore: PropTypes.bool,
  isShowBtn: PropTypes.bool,
};

export default HeaderSection;
