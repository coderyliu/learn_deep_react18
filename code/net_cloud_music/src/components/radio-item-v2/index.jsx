import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import { RadioItemV2Wrapper } from "./style";

const RadioItemV2 = memo((props) => {
  const { itemData } = props;

  // ?点击item跳转至详情电台列表
  const navigate = useNavigate();
  function handleItemClick() {
    navigate(`/detail/radio/${itemData.id}`);
  }

  return (
    <RadioItemV2Wrapper>
      <div className="picture" onClick={() => handleItemClick()}>
        <img src={itemData.picUrl} alt="" />
      </div>
      <div className="info" onClick={() => handleItemClick()}>
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
