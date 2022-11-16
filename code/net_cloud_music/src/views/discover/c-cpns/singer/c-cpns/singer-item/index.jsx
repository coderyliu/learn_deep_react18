import PropTypes from "prop-types";
import React, { memo } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { SingerItemWrapper } from "./style";

const SingerItem = memo((props) => {
  const { itemData } = props;

  // ?处理singer item点击
  const navigate = useNavigate();
  function handleSingerClick() {
    navigate(`/artist/${itemData.id}`);
  }

  return (
    <SingerItemWrapper>
      <div className="bg_cover" onClick={() => handleSingerClick()}>
        <img src={itemData.picUrl} alt="" />
      </div>
      <div className="info" onClick={() => handleSingerClick()}>
        <span className="name">{itemData.name}</span>
        <span className="icon"></span>
      </div>
    </SingerItemWrapper>
  );
});

SingerItem.propTypes = {
  itemData: PropTypes.object,
};

export default SingerItem;
