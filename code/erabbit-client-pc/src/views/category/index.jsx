import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchCategoryData } from "@/store/modules/category";

import AppBread from "@/components/common/app-bread";
import AppSwiperV2 from "@/components/base-ui/app-swiper-v2";
import CateContentV1 from "./c-cpns/cate-content-v1";
import { CategoryWrapper } from "./style";

const Category = memo(() => {
  // ?路由
  const params = useParams();

  // ?redux状态
  const { isFixedHeader, firstCateInfo, homeBanner } = useSelector(
    (state) => ({
      isFixedHeader: state.main.isFixedHeader,
      firstCateInfo: state.cate.firstCateInfo,
      homeBanner: state.home.homeBanner,
    }),
    shallowEqual
  );

  // ?发送网络请求请求数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryData({ id: params.id }));
  }, [dispatch, params.id]);

  // ?处理轮播图item的点击
  const handleBannerItemClick = (data) => {
    console.log(data);
  };

  return (
    <CategoryWrapper isHavePadding={isFixedHeader}>
      <AppBread></AppBread>
      <AppSwiperV2
        indicatorList={homeBanner}
        isHaveLeftDistance={false}
        isShowBannerControl={true}
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
      <CateContentV1 cateData={firstCateInfo}></CateContentV1>
    </CategoryWrapper>
  );
});

export default Category;
