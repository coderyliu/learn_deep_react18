import React, { memo, useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { message } from "antd";

import { fetchMVData } from "@/store/modules/mv";
import { getSendComment } from "@/services/modules/comment";
import { fetchCommentData } from "@/store/modules/comment";

import MVRecommendSection from "./c-cpns/mv-recommend-section";
import DownloadSection from "@/components/download-section";
import MVPlayCpn from "@/components/mv-play-cpn";
import Comment from "../comment";
import { MVCpnWrapper } from "./style";

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
    dispatch(fetchCommentData({ path: "mv", id: params.id, type: 1 }));
  }, [dispatch, params.id]);

  // ?处理分页点击
  const paginationClick = useCallback(
    (v) => {
      dispatch(
        fetchCommentData({
          path: "mv",
          id: params.id,
          type: 1,
          offset: (v - 1) * 20,
        })
      );
    },
    [dispatch, params.id]
  );

  // ?处理发表评论
  const commentClick = useCallback(
    (data) => {
      getSendComment(1, 1, params.id, data).then((res) => {
        message.success("发表评论成功!");
      });
    },
    [dispatch, params.id]
  );

  return (
    <MVCpnWrapper>
      <div className="mv-wrap">
        <div className="left-cont">
          <MVPlayCpn
            mvInfo={mvDetailInfo}
            address={address}
            countInfo={countInfo}
          ></MVPlayCpn>
          <Comment
            paginationClick={paginationClick}
            commentClick={commentClick}
          ></Comment>
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
