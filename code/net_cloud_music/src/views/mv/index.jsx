import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchMVData } from "@/store/modules/mv";

import MVRecommendSection from "./c-cpns/mv-recommend-section";
import DownloadSection from "@/components/download-section";
import { MVCpnWrapper } from "./style";
import MVPlayCpn from "@/components/mv-play-cpn";

const MVCpn = memo(() => {
  // 路由
  const params = useParams();

  // ? redux相关
  const { address, mvDetailInfo, mvRecommendData, countInfo } = useSelector(
    (state) => ({
      address: state.mv.address,
      mvDetailInfo: state.mv.mvDetailInfo,
      mvRecommendData: state.mv.mvRecommendData,
      countInfo: state.mv.countInfo,
    }),
    shallowEqual
  );

  // ?发送网络请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMVData({ id: params.id }));
  }, [dispatch, params.id]);

  return (
    <MVCpnWrapper>
      <div className="mv-wrap">
        <div className="left-cont">
          <MVPlayCpn
            mvInfo={mvDetailInfo}
            address={address}
            countInfo={countInfo}
          ></MVPlayCpn>
        </div>
        <div className="right-cont">
          <MVRecommendSection recList={mvRecommendData}></MVRecommendSection>
          <DownloadSection></DownloadSection>
        </div>
      </div>
    </MVCpnWrapper>
  );
});

export default MVCpn;
