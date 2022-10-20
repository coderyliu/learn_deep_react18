import PropTypes from "prop-types";
import React, { memo, useState } from "react";

import { SearchTabsWrapper } from "./style";

const SearchTabs = memo((props) => {
  const { tabClick, titles } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  // 事件处理
  function handleTabClick(index){
    setCurrentIndex(index)
    if(tabClick) tabClick(index)
  }

  return (
    <SearchTabsWrapper>
      {titles.map((item, index) => {
        return (
          <div
            className={currentIndex === index ? "item active" : "item"}
            key={item}
            onClick={e=>handleTabClick(index)}
          >
            <span className="text">{item}</span>
            <span className="bottom"></span>
          </div>
        );
      })}
    </SearchTabsWrapper>
  );
});

SearchTabs.propTypes = {
  tabClick: PropTypes.func,
  titles: PropTypes.array,
};

export default SearchTabs;
