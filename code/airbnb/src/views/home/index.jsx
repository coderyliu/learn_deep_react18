import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchHomeData } from "@/store/modules/home";
import { isEmptyObj } from "@/utils";

import HomeBanner from "./c-cpns/home-banner";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { HomeWrapper } from "./style";

const Home = memo(() => {
  // redux Hook
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo } =
    useSelector(
      (state) => ({
        discountInfo: state.home.discountInfo,
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        recommendInfo: state.home.recommendInfo,
      }),
      shallowEqual
    );
  const dispatch = useDispatch();

  // 副作用
  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content-wrap">
        {isEmptyObj(discountInfo) && (
          <HomeSectionV2 infoData={discountInfo}></HomeSectionV2>
        )}
        <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
        <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
        {isEmptyObj(recommendInfo) && (
          <HomeSectionV2 infoData={recommendInfo}></HomeSectionV2>
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;
