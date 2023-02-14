import PropTypes from "prop-types";
import React, { memo } from "react";

import { GoodsPropertyWrapper } from "./style";

const GoodsProperty = memo((props) => {
  const { detailInfo } = props;

  return (
    <GoodsPropertyWrapper>
      <ul className="top-property">
        {detailInfo?.properties?.map((item) => {
          return (
            <li key={item.name} className="property-item">
              <span className="property-name">{item.name}</span>
              <span className="property-value">{item.value}</span>
            </li>
          );
        })}
      </ul>
      <ul className="bottom-img-list">
        {detailInfo?.pictures?.map((item, index) => {
          return (
            <li key={index} className="img-item">
              <img src={item} alt="" />
            </li>
          );
        })}
      </ul>
    </GoodsPropertyWrapper>
  );
});

GoodsProperty.propTypes = {
  detailInfo: PropTypes.object,
};

export default GoodsProperty;
