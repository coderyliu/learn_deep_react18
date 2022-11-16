import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import { secondToMinuteFn } from "@/utils/format";

import { MVRecommendItemWrapper } from "./style";

const MVRecommendItem = memo((props) => {
  const { itemData } = props;

  // ?处理mv item点击
  const navigate = useNavigate();
  function handleItemClick() {
    navigate(`/mv/${itemData.id}`);
  }

  return (
    <MVRecommendItemWrapper>
      <div className="outer" onClick={() => handleItemClick()}>
        <div className="left">
          <img src={itemData.picUrl} alt="" />
          <div className="btn">
            <span className="icon"></span>
            <span className="count">{itemData.playCount}</span>
          </div>
        </div>
        <div className="right">
          <div className="name omit">{itemData.name}</div>
          <div className="time">{secondToMinuteFn(itemData.duration)}</div>
          {itemData.artists && (
            <div className="creator">by {itemData.artists[0].name}</div>
          )}
        </div>
      </div>
    </MVRecommendItemWrapper>
  );
});

MVRecommendItem.propTypes = {
  itemData: PropTypes.object,
};

export default MVRecommendItem;
