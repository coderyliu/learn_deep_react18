import PropTypes from "prop-types";
import React, { memo } from "react";

import { getFormatDate } from "@/utils/format";

import { MVItemV1Wrapper } from "./style";

const MvItemV1 = memo((props) => {
  const { itemData } = props;

  return (
    <MVItemV1Wrapper>
      <div className="picture">
        <img src={itemData.imgurl} alt="" />
        <div className="play-icon"></div>
      </div>
      <div className="info">
        <span className="name omit">{itemData.name}</span>
        <span className="time">{getFormatDate(itemData.publishTime)}</span>
      </div>
    </MVItemV1Wrapper>
  );
});

MvItemV1.propTypes = {
  itemData: PropTypes.object,
};

export default MvItemV1;
