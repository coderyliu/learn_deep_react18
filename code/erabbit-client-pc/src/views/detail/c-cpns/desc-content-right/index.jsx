import PropTypes from "prop-types";
import React, { memo } from "react";

import { DescContentRightWrapper } from "./style";
import CateListItemV1 from "@/components/common/cate-list-item-v1";

const DescContentRight = memo((props) => {
  const { hotDayRankRecommend, hotWeekRankRecommend } = props;

  return (
    <DescContentRightWrapper>
      <h2 className="rank-title">24小时热销榜</h2>
      <ul className="day-top-rank">
        {hotDayRankRecommend?.map((item) => {
          return (
            <CateListItemV1
              key={item.id}
              dataInfo={item}
              isShowDesc={true}
              isTriggerHover={false}
              wrapWidth={220}
              wrapHeight={300}
              imgWidth={200}
              imgHeight={200}
              bgColor="fff"
            ></CateListItemV1>
          );
        })}
      </ul>
      <h2 className="rank-title">周热销榜</h2>
      <ul className="week-top-rank">
        {hotWeekRankRecommend?.map((item) => {
          return (
            <CateListItemV1
              key={item.id}
              dataInfo={item}
              isShowDesc={true}
              isTriggerHover={false}
              wrapWidth={220}
              wrapHeight={300}
              imgWidth={200}
              imgHeight={200}
              bgColor="fff"
            ></CateListItemV1>
          );
        })}
      </ul>
    </DescContentRightWrapper>
  );
});

DescContentRight.propTypes = {
  hotDayRankRecommend: PropTypes.array,
  hotWeekRankRecommend: PropTypes.array,
};

export default DescContentRight;
