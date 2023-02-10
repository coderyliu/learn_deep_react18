import PropTypes from "prop-types";
import React, { memo } from "react";

import HomeListItemV1 from "@/components/common/home-list-item-v1";
import HomeHeaderV1 from "@/components/common/home-header-v1";
import { HomeListV1Wrapper } from "./style";

const HomeListV1 = memo((props) => {
  const { listData, title, desc, isShowTotal = false,children } = props;

  return (
    <HomeListV1Wrapper>
      <div className="list-header">
        <HomeHeaderV1
          title={title}
          desc={desc}
          isShowTotal={isShowTotal}
        >
          {children}
        </HomeHeaderV1>
      </div>
      <div className="list-wrap">
        {listData?.map((item, index) => {
          return (
            <HomeListItemV1
              dataInfo={item}
              key={index}
              className="item"
            ></HomeListItemV1>
          );
        })}
      </div>
    </HomeListV1Wrapper>
  );
});

HomeListV1.propTypes = {
  listData: PropTypes.array,
  title: PropTypes.string,
  desc: PropTypes.string,
  isShowTotal: PropTypes.bool,
};

export default HomeListV1;
