import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchHomeData } from "@/store/modules/home";

import AppSwiper from "@/components/base-ui/app-swiper";
import HomeListV1 from "./c-cpns/home-list-v1";
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
  } = useSelector(
    (state) => ({
      homeBanner:state.home.homeBanner,
      newFreshData: state.home.newFreshData,
      hotRecommendData: state.home.hotRecommendData,
      hotBrandData: state.home.hotBrandData,
      goodsHomeInfo: state.home.goodsHomeInfo,
      goodsFoodInfo: state.home.goodsFoodInfo,
      goodsClothesInfo: state.home.goodsClothesInfo,
      goodsChildInfo: state.home.goodsChildInfo,
      newSpecialData: state.home.newSpecialData,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  // ?请求首页数据
  useEffect(() => {
    dispatch(fetchHomeData("请求首页需要的数据源!"));
  }, [dispatch]);

  return (
    <HomeWrapper>
      <AppSwiper bannerData={homeBanner}></AppSwiper>
      <HomeListV1 listData={newFreshData} title='新鲜好物' desc='新鲜出炉 品质靠谱'></HomeListV1>
      <HomeListV1 listData={hotRecommendData} title='人气推荐' desc='人气爆款 不容错过'></HomeListV1>
    </HomeWrapper>
  );
});

export default Home;
