import PropTypes from "prop-types";
import React, { memo } from "react";

import HomeHeaderV1 from "@/components/common/home-header-v1";
import { HomeListV3Wrapper } from "./style";
import HomeListItemV3 from "@/components/common/home-list-item-v3";

const HomeListV3 = memo((props) => {
  const { listData } = props;

  return (
    <HomeListV3Wrapper>
      <div className="outer-wrap">
        <HomeHeaderV1 title="最新专题" isShowTotal={true}></HomeHeaderV1>
        <div className="list-wrap">
          {listData?.map((item) => {
            return (
              <HomeListItemV3 dataInfo={item} key={item.id}></HomeListItemV3>
            );
          })}
        </div>
      </div>
    </HomeListV3Wrapper>
  );
});

HomeListV3.propTypes = {
  listData: PropTypes.array,
};

export default HomeListV3;
