import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchRecommendData } from "@/store/modules/recommend";

import RecommendBanner from "./c-cpns/recom-banner";
import HotRecommend from "./c-cpns/hot-recommend";
import NewDisk from "./c-cpns/new-disk";
import PartRanking from "./c-cpns/ranking";
import UserLogin from "./c-cpns/user-login";
import SettleSinger from "./c-cpns/settle-singer";
import { RecommendWrapper } from "./style";

const Recommend = memo((props) => {
  // redux相关
  const {
    topBanner,
    hotRecommend,
    newDisk,
    topUpList,
    topHotList,
    topOriginList,
    artists,
    popularDJ,
  } = useSelector(
    (state) => ({
      topBanner: state.recommend.topBanner,
      hotRecommend: state.recommend.hotRecommend,
      newDisk: state.recommend.newDisk,
      topUpList: state.recommend.topUpList,
      topHotList: state.recommend.topHotList,
      topOriginList: state.recommend.topOriginList,
      artists: state.recommend.artist,
      popularDJ: state.recommend.popularDJ,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecommendData("coderyliu"));
  }, [dispatch]);

  return (
    <RecommendWrapper>
      <RecommendBanner banners={topBanner}></RecommendBanner>
      <div className="content-wrapper">
        <div className="con-left">
          {hotRecommend.length && (
            <HotRecommend hotRecommend={hotRecommend}></HotRecommend>
          )}
          {newDisk.length && <NewDisk newDisk={newDisk}></NewDisk>}
          <PartRanking
            topUpList={topUpList}
            topHotList={topHotList}
            topOriginList={topOriginList}
          ></PartRanking>
        </div>
        <div className="con-right">
          <UserLogin></UserLogin>
          <SettleSinger artists={artists} title="入驻歌手"></SettleSinger>
          <SettleSinger
            isShowApply={false}
            title="热门主播"
            artists={popularDJ}
          ></SettleSinger>
        </div>
      </div>
    </RecommendWrapper>
  );
});

export default Recommend;
