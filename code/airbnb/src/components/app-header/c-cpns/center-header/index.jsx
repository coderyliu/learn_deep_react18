import React, { memo, useState } from "react";
import IconSearchBar from "@/assets/svg/icon-search-bar";
import { CSSTransition } from "react-transition-group";

import searchTitles from "@/assets/data/search-titles.json";

import SearchTabs from "./c-cpns/search-tabs";
import SearchSections from "./c-cpns/search-sections";
import { CenterHeaderWrapper } from "./style";

const CenterHeader = memo((props) => {
  const { isSearch, searchBarClick } = props;

  const [tabIndex, setTabIndex] = useState(0);
  const titles = searchTitles.map((item) => item.title);

  function searchBarHandle() {
    if (searchBarClick) searchBarClick();
  }

  return (
    <CenterHeaderWrapper>
      <CSSTransition
        classNames="bar"
        in={!isSearch}
        timeout={200}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={searchBarHandle}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar></IconSearchBar>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        classNames="detail"
        in={isSearch}
        timeout={200}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tanClick={setTabIndex}></SearchTabs>
          <div className="infos">
            <SearchSections
              searchInfos={searchTitles[tabIndex].searchInfos}
            ></SearchSections>
          </div>
        </div>
      </CSSTransition>
    </CenterHeaderWrapper>
  );
});

export default CenterHeader;
