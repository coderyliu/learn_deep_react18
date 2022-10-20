import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchHomeData } from "@/store/modules/home";
import { isEmptyObj } from "@/utils";

import HomeBanner from "./c-cpns/home-banner";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import HomeSectionV3 from "./c-cpns/home-section-v3";
import HomeLongFor from "./c-cpns/home-longfor";
import { HomeWrapper } from "./style";
import AppHeader from "@/components/app-header";
import { changeHeaderInfoFixedAction } from "@/store/modules/main";

const Home = memo(() => {
  // redux Hook
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longForInfo,
    plusInfo,
    headerInfo,
  } = useSelector(
    (state) => ({
      discountInfo: state.home.discountInfo,
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      recommendInfo: state.home.recommendInfo,
      longForInfo: state.home.longForInfo,
      plusInfo: state.home.plusInfo,
      headerInfo: state.main.headerInfo,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // 副作用
  useEffect(() => {
    dispatch(fetchHomeData());
    dispatch(changeHeaderInfoFixedAction({ isFixed: true, topAlpha: true }));
  }, [dispatch]);

  return (
    <HomeWrapper>
      <AppHeader isFixed={headerInfo.isFixed}></AppHeader>
      <HomeBanner></HomeBanner>
      <div className="content-wrap">
        {isEmptyObj(discountInfo) && (
          <HomeSectionV2 infoData={discountInfo}></HomeSectionV2>
        )}
        <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
        <HomeLongFor infoData={longForInfo}></HomeLongFor>
        <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
        {isEmptyObj(recommendInfo) && (
          <HomeSectionV2 infoData={recommendInfo}></HomeSectionV2>
        )}
        <HomeSectionV3 infoData={plusInfo}></HomeSectionV3>
      </div>
    </HomeWrapper>
  );
});

export default Home;
