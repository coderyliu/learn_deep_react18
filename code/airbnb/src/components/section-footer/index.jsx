import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import { SectionFooterWrapper } from "./style";

const SectionFooter = memo((props) => {
  const { name } = props;
  const navigate = useNavigate();

  // 对展示的名字作处理
  let showName = "显示全部";
  if (name) {
    showName = `查看更多${name}中心房源`;
  }

  // 事件处理
  function handleMoreClick() {
    navigate("/entire");
  }

  return (
    <SectionFooterWrapper>
      <div className="show-name" onClick={(e) => handleMoreClick()}>
        <span className="name">{showName}</span>
        <IconMoreArrow></IconMoreArrow>
      </div>
    </SectionFooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
