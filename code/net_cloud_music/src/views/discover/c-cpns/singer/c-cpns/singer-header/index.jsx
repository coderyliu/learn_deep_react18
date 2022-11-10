import PropTypes from "prop-types";
import React, { memo } from "react";

import { SingerHeaderWrapper } from "./style";

const SingerHeader = memo((props) => {
  const { title,isShowMore = true } = props;

  // 更多点击处理
  function handleMoreClick() {
  }

  return (
    <SingerHeaderWrapper>
      <div className="section-left">
        <div className="title">{title}</div>
      </div>
      {isShowMore && (
        <div className="section-right">
          <span className="text" onClick={() => handleMoreClick()}>
            更多 &gt;
          </span>
        </div>
      )}
    </SingerHeaderWrapper>
  );
});

SingerHeader.propTypes = {
  title: PropTypes.string,
  isShowMore: PropTypes.bool,
};

export default SingerHeader;
