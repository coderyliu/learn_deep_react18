import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { changeCurrentSongAction, changePlayListAction } from "@/store/modules/player";

import { secondToMinuteFn } from "@/utils/format";

import { PlayerSectionWrapper } from "./style";

const PlayerSection = memo((props) => {
  const { rankingDetail, isShowTopImage = true, isShowAlbum = false,tableList } = props;

  // ?处理跳转至播放页
  const navigate=useNavigate()
  function handleNavigatePlayer(data){
    navigate(`/song/${data.id}`)
  }

  // ?处理歌曲播放
  const dispatch=useDispatch()
  function handleSongPlayerClick(data){
    dispatch(changeCurrentSongAction(data))
    dispatch(changePlayListAction(data))
  }

  // ?将歌曲添加到播放列表中
  function handleAddPlaylist(data){
    dispatch(changePlayListAction(data))
  }

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
                  <span className="player-icon" onClick={()=>handleSongPlayerClick(item)}></span>
                  <span className="name" onClick={()=>handleNavigatePlayer(item)}>{item.name}</span>
                </div>
                <div className="time section">{secondToMinuteFn(item.dt)}</div>
                <div className="control">
                  <span className="add" onClick={()=>handleAddPlaylist(item)}></span>
                  <span className="collect"></span>
                  <span className="share"></span>
                  <span className="download"></span>
                </div>
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
