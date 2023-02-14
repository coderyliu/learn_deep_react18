import PropTypes from "prop-types";
import React, { memo } from "react";

import DescContentLeft from "../desc-content-left";
import DescContentRight from "../desc-content-right";
import { GoodsInfoDescWrapper } from "./style";

const GoodsInfoDesc = memo((props) => {
  const { hotDayRankRecommend, hotWeekRankRecommend, detailInfo } = props;

  return (
    <GoodsInfoDescWrapper>
      <DescContentLeft detailInfo={detailInfo}></DescContentLeft>
      <DescContentRight
        hotDayRankRecommend={hotDayRankRecommend}
        hotWeekRankRecommend={hotWeekRankRecommend}
      ></DescContentRight>
    </GoodsInfoDescWrapper>
  );
});

GoodsInfoDesc.propTypes = {
  detailInfo: PropTypes.object,
  hotDayRankRecommend: PropTypes.array,
  hotWeekRankRecommend: PropTypes.array,
};

export default GoodsInfoDesc;
