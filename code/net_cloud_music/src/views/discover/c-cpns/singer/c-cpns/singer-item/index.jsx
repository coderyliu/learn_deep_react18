import PropTypes from "prop-types";
import React, { memo } from "react";

import { SingerItemWrapper } from "./style";

const SingerItem = memo((props) => {
  const { itemData }=props

  return (
    <SingerItemWrapper>
      <div className="bg_cover">
        <img src={itemData.picUrl} alt="" />
      </div>
      <div className="info">
        <span className="name">{itemData.name}</span>
        <span className="icon"></span>
      </div>
    </SingerItemWrapper>
  );
});

SingerItem.propTypes = {
  itemData:PropTypes.object
};

export default SingerItem;
