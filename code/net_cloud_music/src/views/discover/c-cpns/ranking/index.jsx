import React, { memo, useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchRankingData } from "@/store/modules/ranking";
import { rankTableList } from "@/assets/data/header-table";

import RankInfo from "./c-cpns/rank-info";
import PlayerHeader from "@/components/player-header";
import PlayerSection from "@/components/player-section";
import { RankingWrapper } from "./style";

const Ranking = memo((props) => {
  // redux相关
  const { rankingInfo, rankingDetail } = useSelector(
    (state) => ({
      rankingInfo: state.ranking.rankingInfo,
      rankingDetail: state.ranking.rankingDetail,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // 请求数据
    dispatch(fetchRankingData({ id: 19723756, isGetCate: true }));
  }, [dispatch]);

  // ?处理榜单的点击
  const handleToggleRankClick = useCallback(
    (v) => {
      dispatch(fetchRankingData({ id: v.id, isGetCate: false }));
    },
    [dispatch]
  );

  return (
    <RankingWrapper>
      <div className="rank-inner">
        <div className="con-left">
          <RankInfo
            rankingInfo={rankingInfo}
            toggleClick={handleToggleRankClick}
          ></RankInfo>
        </div>
        <div className="con-right">
          <PlayerHeader rankingDetail={rankingDetail}></PlayerHeader>
          <PlayerSection
            detail={rankingDetail}
            tableList={rankTableList}
          ></PlayerSection>
        </div>
      </div>
    </RankingWrapper>
  );
});

export default Ranking;
