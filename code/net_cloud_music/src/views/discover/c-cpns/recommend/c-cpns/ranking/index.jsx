import PropTypes from "prop-types";
import React, { memo } from "react";

import HeaderSection from "../../../../../../components/header-section";
import RankItem from "../rank-item";
import { PartRankingWrapper } from "./style";

const PartRanking = memo((props) => {
  const { topUpList, topHotList, topOriginList } = props;

  return (
    <PartRankingWrapper>
      {topUpList.length && <HeaderSection title="榜单"></HeaderSection>}
      <div className="part-ranking-wrap">
        <RankItem rankInfo={topUpList}></RankItem>
        <RankItem rankInfo={topHotList}></RankItem>
        <RankItem rankInfo={topOriginList}></RankItem>
      </div>
    </PartRankingWrapper>
  );
});

PartRanking.propTypes = {
  topUpList: PropTypes.object,
  topHotList: PropTypes.object,
  topOriginList: PropTypes.object,
};

export default PartRanking;
