import PropTypes from "prop-types";
import React, { memo } from "react";

import { getUpdateTime } from "@/utils/format";

import { PlayerHeaderWrapper } from "./style";

const PlayerHeader = memo((props) => {
  const { rankingDetail } = props;

  return (
    <PlayerHeaderWrapper>
      <div className="bg_cover">
        <img src={rankingDetail?.coverImgUrl} alt="" />
      </div>
      <div className="infos">
        <div className="top-desc">
          <div className="name">{rankingDetail?.name}</div>
          <div className="time">
            <span className="time-icon"></span>
            <span>最近更新：{getUpdateTime(rankingDetail?.trackUpdateTime)}</span>
            <span>（刚刚更新）</span>
          </div>
        </div>
        <div className="btns">
          <div className="player icon">播放</div>
          <div className="subscribe icon">{rankingDetail?.subscribedCount}</div>
          <div className="share icon">{rankingDetail?.shareCount}</div>
          <div className="download icon">下载</div>
          <div className="comment icon">{rankingDetail?.commentCount}</div>
        </div>
      </div>
    </PlayerHeaderWrapper>
  );
});

PlayerHeader.propTypes = {
  rankingDetail: PropTypes.object,
};

export default PlayerHeader;
