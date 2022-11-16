import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  changePlayListAction,
  getSongDetailAction,
} from "@/store/modules/player";
import { changeIsShowVipAction } from "@/store/modules/main";
import { rankTableList } from "@/assets/data/header-table";

import { checkMusicCanPlay } from "@/services/modules/player";
import { getFormatDate, secondToMinuteFn } from "@/utils/format";

import { PlayerSectionWrapper } from "./style";

const PlayerSection = memo((props) => {
  const {
    detail,
    isShowHeader = true,
    isShowAr = false,
    isShowTopImage = true,
    isShowAlbum = false,
    tableList = rankTableList,
    title = "歌曲",
    isShowPlayCount = true,
    isShowTable = true,
  } = props;

  // ?处理跳转至播放页
  const navigate = useNavigate();
  function handleNavigatePlayer(data) {
    navigate(`/song/${data.id}`);
  }

  // ?处理歌曲播放
  const dispatch = useDispatch();
  function handleSongPlayerClick(data) {
    // todo 检查音乐是否可以播放
    checkMusicCanPlay(data.id).then((res) => {
      if (res.success) {
        dispatch(getSongDetailAction({ id: data.id }));
      } else {
        dispatch(changeIsShowVipAction(true));
      }
    });
  }

  // ?将歌曲添加到播放列表中
  function handleAddPlaylist(data) {
    dispatch(changePlayListAction(data));
  }

  // ?处理传入的值的一些细节
  const songList = detail?.tracks || detail || [];

  return (
    <PlayerSectionWrapper tableList={tableList}>
      {isShowHeader && (
        <div className="header-wrap">
          <div className="left">
            <span className="title">{title}列表</span>
            <span className="count">{songList.length} 首歌</span>
          </div>
          {isShowPlayCount && (
            <div className="right">
              <span className="text">播放：</span>
              <span className="play-count">{detail?.playCount}</span>
              <span className="text">次</span>
            </div>
          )}
        </div>
      )}
      <div className="content-wrap">
        {isShowTable && (
          <div className="table-header">
            {tableList.map((tName, index) => {
              return (
                <div className={`${tName.value} section`} key={index}>
                  {tName.label}
                </div>
              );
            })}
          </div>
        )}
        <div className="table-mainner">
          {songList.length > 0 &&
            songList.map((item, index) => {
              return (
                <div className="item" key={item.id}>
                  <div className="sort-index section">{index + 1}</div>
                  <div className="song section">
                    {isShowTopImage && index < 3 && (
                      <img src={item.al.picUrl} alt="" />
                    )}
                    <span
                      className="player-icon"
                      onClick={() => handleSongPlayerClick(item)}
                    ></span>
                    <span
                      className="name omit"
                      onClick={() => handleNavigatePlayer(item)}
                    >
                      {item.name}
                    </span>
                  </div>
                  {item.listenerCount && (
                    <div className="play-count section omit">
                      播放 {item.listenerCount}
                    </div>
                  )}
                  {item.likedCount && (
                    <div className="like-count section omit">
                      赞 {item.likedCount}
                    </div>
                  )}
                  {item.scheduledPublishTime && (
                    <div className="date section omit">
                      {getFormatDate(item.scheduledPublishTime)}
                    </div>
                  )}
                  {item.dt && (
                    <div className="time section">
                      {secondToMinuteFn(item.dt)}
                    </div>
                  )}
                  {item.duration && (
                    <div className="time section">
                      {secondToMinuteFn(item.duration)}
                    </div>
                  )}
                  <div className="control">
                    <span
                      className="add"
                      onClick={() => handleAddPlaylist(item)}
                    ></span>
                    <span className="collect"></span>
                    <span className="share"></span>
                    <span className="download"></span>
                  </div>
                  {item.ar && isShowAr && (
                    <div className="singer section">
                      {item.ar && item.ar[0].name}
                    </div>
                  )}
                  {item.al && (
                    <div className="singer section omit">
                      {item.al && item.al.name}
                    </div>
                  )}
                  {isShowAlbum && (
                    <div className="album section">{item.al.name}</div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </PlayerSectionWrapper>
  );
});

PlayerSection.propTypes = {
  detail: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  isShowTopImage: PropTypes.bool,
  isShowAlbum: PropTypes.bool,
  isShowHeader: PropTypes.bool,
  isShowAr: PropTypes.bool,
  tableList: PropTypes.array,
  title: PropTypes.string,
};

export default PlayerSection;
