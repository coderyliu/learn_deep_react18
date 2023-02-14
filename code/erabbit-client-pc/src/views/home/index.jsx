import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchBannerData, fetchHomeData } from "@/store/modules/home";

// import AppSwiperV1 from "@/components/base-ui/app-swiper-v1";
import AppSwiperV2 from "@/components/base-ui/app-swiper-v2";
import HomeCateContent from "./c-cpns/home-cate-content";
import HomeContentV1 from "./c-cpns/home-content-v1";
import HomeContentV2 from "./c-cpns/home-content-v2";
import HomeListV3 from "./c-cpns/home-list-v3";
import { HomeWrapper } from "./style";

const Home = memo(() => {
  // ?redux状态相关
  const {
    allCateData,
    isShowBannerControl,
    homeBanner,
    newFreshData,
    hotRecommendData,
    // hotBrandData,
    goodsHomeInfo,
    goodsFoodInfo,
    goodsClothesInfo,
    goodsChildInfo,
    newSpecialData,
    isFixedHeader,
  } = useSelector(
    (state) => ({
      allCateData: state.home.allCateData,
      isShowBannerControl: state.home.isShowBannerControl,
      homeBanner: state.home.homeBanner,
      newFreshData: state.home.newFreshData,
      hotRecommendData: state.home.hotRecommendData,
      hotBrandData: state.home.hotBrandData,
      goodsHomeInfo: state.home.goodsHomeInfo,
      goodsFoodInfo: state.home.goodsFoodInfo,
      goodsClothesInfo: state.home.goodsClothesInfo,
      goodsChildInfo: state.home.goodsChildInfo,
      newSpecialData: state.home.newSpecialData,
      isFixedHeader: state.main.isFixedHeader,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  // ?请求首页数据
  useEffect(() => {
    dispatch(fetchBannerData());
    dispatch(fetchHomeData("请求首页需要的数据源!"));
  }, [dispatch]);

  // ?处理轮播图item的点击
  const handleBannerItemClick = (data) => {
    console.log(data);
  };

  return (
    <HomeWrapper isHavePadding={isFixedHeader}>
      {/* <AppSwiperV1 bannerData={homeBanner}></AppSwiperV1> */}
      <AppSwiperV2
        indicatorList={homeBanner}
        isHaveLeftDistance={true}
        isShowBannerControl={isShowBannerControl}
      >
        {homeBanner?.map((item) => {
          return (
            <div
              key={item.id}
              className="banner-list-item"
              onClick={() => handleBannerItemClick(item)}
            >
              <img src={item.imgUrl} alt="" />
            </div>
          );
        })}
      </AppSwiperV2>
      <HomeCateContent
        cateList={allCateData}
        isFixedHeader={isFixedHeader}
      ></HomeCateContent>
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
      <HomeListV3 listData={newSpecialData}></HomeListV3>
    </HomeWrapper>
  );
});

export default Home;
