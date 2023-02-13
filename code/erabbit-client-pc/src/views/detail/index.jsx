import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchGoodsDetailData } from "@/store/modules/detail";

import { DetailWrapper } from "./style";

const Detail = memo(() => {
  // ?路由
  const params = useParams();

  // ?redux相关
  const { goodsDetailInfo } = useSelector(
    (state) => ({
      goodsDetailInfo: state.detail.goodsDetailInfo,
    }),
    shallowEqual
  );

  // ?发送网络请求详情数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoodsDetailData({ id: params.id }));
  }, [dispatch, params.id]);

  return (
    <DetailWrapper>
      <h2>详情页{goodsDetailInfo.id}</h2>
    </DetailWrapper>
  );
});

export default Detail;
