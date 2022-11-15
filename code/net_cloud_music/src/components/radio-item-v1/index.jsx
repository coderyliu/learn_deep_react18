import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import { RadioItemV1Wrapper } from "./style";

const RadioItemV1 = memo((props) => {
  const { itemData } = props;

  // ?点击item跳转至详情电台列表
  const navigate = useNavigate();
  function handleItemClick() {
    navigate(`/detail/radio/${itemData.id}`);
  }

  return (
    <RadioItemV1Wrapper>
      <div className="picture" onClick={() => handleItemClick()}>
        <img src={itemData.picUrl} alt="" />
      </div>
      <div className="info" onClick={() => handleItemClick()}>
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
