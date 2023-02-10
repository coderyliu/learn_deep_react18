import PropTypes from "prop-types";
import React, { memo } from "react";

import HomeListV2 from "../home-list-v2";
import { HomeContentV2Wrapper } from "./style";

const HomeContentV2 = memo((props) => {
  const { goodsHomeInfo, goodsFoodInfo, goodsClothesInfo, goodsChildInfo } =
    props;

  return (
    <HomeContentV2Wrapper>
      <HomeListV2
        listInfo={goodsHomeInfo}
        title="居家"
        isShowTotal={true}
      ></HomeListV2>
      <HomeListV2
        listInfo={goodsFoodInfo}
        title="美食"
        isShowTotal={true}
      ></HomeListV2>
      <HomeListV2
        listInfo={goodsClothesInfo}
        title="服饰"
        isShowTotal={true}
      ></HomeListV2>
      <HomeListV2
        listInfo={goodsChildInfo}
        title="母婴"
        isShowTotal={true}
      ></HomeListV2>
    </HomeContentV2Wrapper>
  );
});

HomeContentV2.propTypes = {
  goodsHomeInfo: PropTypes.object,
  goodsFoodInfo: PropTypes.object,
  goodsClothesInfo: PropTypes.object,
  goodsChildInfo: PropTypes.object,
};

export default HomeContentV2;
