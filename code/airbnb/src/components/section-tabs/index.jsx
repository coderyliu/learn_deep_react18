import PropTypes from "prop-types";
import React, { memo, useState } from "react";

import ScrollView from "@/base-ui/scroll-view";
import { SectionTabsWrapper } from "./style";

const SectionTabs = memo((props) => {
  const { tabLists, tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleTabClick(index) {
    setCurrentIndex(index);
    tabClick(index, tabLists[index]);
  }

  return (
    <SectionTabsWrapper>
      <ScrollView>
        {tabLists.map((item, index) => {
          return (
            <div
              className={currentIndex === index ? "active item" : "item"}
              key={item}
              onClick={(e) => handleTabClick(index)}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </SectionTabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabLists: PropTypes.arrayOf(PropTypes.string),
  tabClick: PropTypes.func,
};

export default SectionTabs;
