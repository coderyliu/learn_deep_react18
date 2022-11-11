import PropTypes from "prop-types";
import React, { memo } from "react";

import { RadioItemV2Wrapper } from "./style";

const RadioItemV2 = memo((props) => {
  const { itemData } = props;

  return (
    <RadioItemV2Wrapper>
      <div className="picture">
        <img src={itemData.picUrl} alt="" />
      </div>
      <div className="info">
        <span className="name omit">{itemData.name}</span>
        <div className="desc">
          <span className="program">共 {itemData.programCount} 期</span>
          <span className="subcount omit">订阅 {itemData.subCount} 次</span>
        </div>
      </div>
    </RadioItemV2Wrapper>
  );
});

RadioItemV2.propTypes = {
  itemData: PropTypes.object,
};

export default RadioItemV2;
