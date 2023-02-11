import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchHomeData } from "@/store/modules/home";

import AppSwiper from "@/components/base-ui/app-swiper";
import HomeContentV1 from "./c-cpns/home-content-v1";
import HomeContentV2 from "./c-cpns/home-content-v2";
import { HomeWrapper } from "./style";

const Home = memo(() => {
  // ?redux状态相关
  const {
    homeBanner,
    newFreshData,
    hotRecommendData,
    hotBrandData,
    goodsHomeInfo,
    goodsFoodInfo,
    goodsClothesInfo,
    goodsChildInfo,
    newSpecialData,
    isFixedHeader
  } = useSelector(
    (state) => ({
      homeBanner: state.home.homeBanner,
      newFreshData: state.home.newFreshData,
      hotRecommendData: state.home.hotRecommendData,
      hotBrandData: state.home.hotBrandData,
      goodsHomeInfo: state.home.goodsHomeInfo,
      goodsFoodInfo: state.home.goodsFoodInfo,
      goodsClothesInfo: state.home.goodsClothesInfo,
      goodsChildInfo: state.home.goodsChildInfo,
      newSpecialData: state.home.newSpecialData,
      isFixedHeader:state.main.isFixedHeader
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  // ?请求首页数据
  useEffect(() => {
    dispatch(fetchHomeData("请求首页需要的数据源!"));
  }, [dispatch]);

  return (
    <HomeWrapper isHavePadding={isFixedHeader}>
      {/* <AppSwiper bannerData={homeBanner}></AppSwiper> */}
      <HomeContentV1
        newFreshData={newFreshData}
        hotRecommendData={hotRecommendData}
      ></HomeContentV1>
      <HomeContentV2
        goodsHomeInfo={goodsHomeInfo}
        goodsFoodInfo={goodsFoodInfo}
        goodsClothesInfo={goodsClothesInfo}
        goodsChildInfo={goodsChildInfo}
      ></HomeContentV2>
    </HomeWrapper>
  );
});

export default Home;
