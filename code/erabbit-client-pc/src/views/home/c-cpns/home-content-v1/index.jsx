import PropTypes from "prop-types";
import React, { memo } from "react";

import HomeListV1 from "../home-list-v1";
import { HomeContentV1Wrapper } from "./style";

const HomeContentV1 = memo((props) => {
  const { newFreshData, hotRecommendData } = props;

  return (
    <HomeContentV1Wrapper>
      <HomeListV1
        listData={newFreshData}
        title="新鲜好物"
        desc="新鲜出炉 品质靠谱"
        isShowTotal={true}
      ></HomeListV1>
      <HomeListV1
        listData={hotRecommendData}
        title="人气推荐"
        desc="人气爆款 不容错过"
        isShowTotal={true}
      ></HomeListV1>
    </HomeContentV1Wrapper>
  );
});

HomeContentV1.propTypes = {
  newFreshData: PropTypes.array,
  hotRecommendData: PropTypes.array,
};

export default HomeContentV1;
