import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchGoodsDetailData } from "@/store/modules/detail";

import AppBread from "@/components/common/app-bread";
import SameGoodsRecommend from "./c-cpns/same-goods-recommend";
import GoodsInfoDesc from "./c-cpns/goods-info-desc";
import { DetailWrapper } from "./style";

const Detail = memo(() => {
  // ?路由
  const params = useParams();

  // ?redux相关
  const {
    goodsDetailInfo,
    isFixedHeader,
    sameGoodsRecommend,
    hotDayRankRecommend,
    hotWeekRankRecommend,
  } = useSelector(
    (state) => ({
      isFixedHeader: state.main.isFixedHeader,
      goodsDetailInfo: state.detail.goodsDetailInfo,
      sameGoodsRecommend: state.detail.sameGoodsRecommend,
      hotDayRankRecommend: state.detail.hotDayRankRecommend,
      hotWeekRankRecommend: state.detail.hotWeekRankRecommend,
    }),
    shallowEqual
  );

  // ?发送网络请求详情数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoodsDetailData({ id: params.id }));
  }, [dispatch, params.id]);

  return (
    <DetailWrapper isHavePadding={isFixedHeader}>
      <div className="content-wrap">
        <AppBread></AppBread>
        <SameGoodsRecommend
          recommendList={sameGoodsRecommend}
        ></SameGoodsRecommend>
        <GoodsInfoDesc
          detailInfo={goodsDetailInfo?.details}
          hotDayRankRecommend={hotDayRankRecommend}
          hotWeekRankRecommend={hotWeekRankRecommend}
        ></GoodsInfoDesc>
      </div>
    </DetailWrapper>
  );
});

export default Detail;
