import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchCategoryData } from "@/store/modules/category";

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

  const dispatch = useDispatch();

  // ?发送网络请求请求数据
  useEffect(() => {
    dispatch(fetchCategoryData({ id: params.id }));
  }, [dispatch, params.id]);

  return (
    <CategoryWrapper isHavePadding={isFixedHeader}>
      <AppSwiperV2 bannerData={homeBanner} isHaveLeftDistance={false}></AppSwiperV2>
      <CateContentV1 cateData={firstCateInfo}></CateContentV1>
    </CategoryWrapper>
  );
});

export default Category;
