import PropTypes from "prop-types";
import React, { memo } from "react";

import { RadioItemV1Wrapper } from "./style";

const RadioItemV1 = memo((props) => {
  const { itemData } = props;

  return (
    <RadioItemV1Wrapper>
      <div className="picture">
        <img src={itemData.picUrl} alt="" />
      </div>
      <div className="info">
        <span className="name omit2">{itemData.name}</span>
        <span className="desc omit2">{itemData.rcmdtext}</span>
      </div>
    </RadioItemV1Wrapper>
  );
});

RadioItemV1.propTypes = {
  itemData: PropTypes.object,
};

export default RadioItemV1;
