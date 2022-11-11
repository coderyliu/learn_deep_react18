import PropTypes from "prop-types";
import React, { memo } from "react";

import { RadioHeaderWrapper } from "./style";

const RadioHeader = memo((props) => {
  const { title, isShowMore = false, isShowToggle = false } = props;

  // ?处理上升top点击
  function handleTopClick(type){
    if(type==='fast'){

    }else{

    }
  }

  return (
    <RadioHeaderWrapper>
      <div className="left">{title}</div>
      <div className="right">
        {isShowMore && <span className="more">更多 &gt;</span>}
        {isShowToggle && (
          <div className="outer-wrap">
            <span className="fast" onClick={()=>handleTopClick('fast')}>上升最快</span>
            <span className="gap">|</span>
            <span className="hot" onClick={()=>handleTopClick('hot')}>最热电台</span>
          </div>
        )}
      </div>
    </RadioHeaderWrapper>
  );
});

RadioHeader.propTypes = {
  title: PropTypes.string,
};

export default RadioHeader;
