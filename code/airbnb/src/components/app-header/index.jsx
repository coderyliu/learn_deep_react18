import React, { memo, useState, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { useScrollPosition } from "@/hooks";

import HeaderLeft from "./c-cpns/left-header";
import HeaderCenter from "./c-cpns/center-header";
import HeaderRight from "./c-cpns/right-header";
import { HeaderWrapper, SearchAreaWrapper } from "./style";

const AppHeader = memo((props) => {
  const { isFixed } = props;
  const [isSearch, setIsSearch] = useState(false);

  const { headerInfo } = useSelector(
    (state) => ({
      headerInfo: state.main.headerInfo,
    }),
    shallowEqual
  );
  const { topAlpha } = headerInfo;

  // 监听滚动
  const { scrollY } = useScrollPosition();
  const prevY = useRef(0);

  // 在正常情况的情况下(搜索框没有弹出来), 不断记录值
  if (!isSearch) prevY.current = scrollY;
  // 在弹出搜索功能的情况, 滚动的距离大于之前记录的距离的30
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false);

  // 透明度逻辑
  const isAlpha = topAlpha && scrollY === 0;

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={isFixed ? "fix" : ""}>
        <div className="content">
          <div className="top">
            <HeaderLeft></HeaderLeft>
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={(e) => setIsSearch(true)}
            ></HeaderCenter>
            <HeaderRight></HeaderRight>
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch} />
        </div>
        {isSearch && (
          <div className="cover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
