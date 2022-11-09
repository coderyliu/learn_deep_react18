import PropTypes from "prop-types";
import React, { memo } from "react";

import { secondToMinuteFn } from "@/utils/format";

import { PlayerSectionWrapper } from "./style";

const PlayerSection = memo((props) => {
  const { rankingDetail, isShowTopImage = true, isShowAlbum = false,tableList } = props;

  return (
    <PlayerSectionWrapper tableList={tableList}>
      <div className="header-wrap">
        <div className="left">
          <span className="title">歌曲列表</span>
          <span className="count">{rankingDetail?.tracks?.length} 首歌</span>
        </div>
        <div className="right">
          <span className="text">播放：</span>
          <span className="play-count">{rankingDetail.playCount}</span>
          <span className="text">次</span>
        </div>
      </div>
      <div className="content-wrap">
        <div className="table-header">
          {
            tableList.map((tName,index)=>{
              return (
                <div className={`${tName.value} section`} key={index}>{tName.label}</div>
              )
            })
          }
        </div>
        <div className="table-mainner">
          {rankingDetail?.tracks?.map((item, index) => {
            return (
              <div className="item" key={item.id}>
                <div className="sort-index section">{index + 1}</div>
                <div className="song section">
                  {isShowTopImage && index < 3 && (
                    <img src={item.al.picUrl} alt="" />
                  )}
                  <span className="player-icon"></span>
                  <span className="name">{item.name}</span>
                </div>
                <div className="time section">{secondToMinuteFn(item.dt)}</div>
                <div className="singer section">{item.ar[0].name}</div>
                {isShowAlbum && <div className="album section">{item.al.name}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </PlayerSectionWrapper>
  );
});

PlayerSection.propTypes = {
  rankingDetail: PropTypes.object,
  isShowTopImage: PropTypes.bool,
  isShowAlbum: PropTypes.bool,
  tableList: PropTypes.array,
};

export default PlayerSection;
