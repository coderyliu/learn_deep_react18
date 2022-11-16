import PropTypes from "prop-types";
import React, { memo } from "react";

import MVRecommendItem from "@/components/mv-recommend-item";
import { MVRecommendSectionWrapper } from "./style";

const MVRecommendSection = memo((props) => {
  const { recList } = props;

  return (
    <MVRecommendSectionWrapper>
      <h3 className="top">相关推荐</h3>
      <div className="list">
        {recList?.map((item) => {
          return (
            <MVRecommendItem itemData={item} key={item.id}></MVRecommendItem>
          );
        })}
      </div>
    </MVRecommendSectionWrapper>
  );
});

MVRecommendSection.propTypes = {
  recList: PropTypes.array,
};

export default MVRecommendSection;
