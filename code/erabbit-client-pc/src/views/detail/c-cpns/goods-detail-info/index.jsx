import React, { memo } from "react";

import GoodsDetailLeft from "./c-cpns/goods-detail-left";
import GoodsDetailRight from "./c-cpns/goods-detail-right";
import { GoodsDetailInfoWrapper } from "./style";

const GoodsDetailInfo = memo(() => {
  return (
    <GoodsDetailInfoWrapper>
      <GoodsDetailLeft></GoodsDetailLeft>
      <GoodsDetailRight></GoodsDetailRight>
    </GoodsDetailInfoWrapper>
  );
});

export default GoodsDetailInfo;
