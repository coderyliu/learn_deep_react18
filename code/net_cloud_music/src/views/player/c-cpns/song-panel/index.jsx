import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";

import { changeCurrentSongAction } from "@/store/modules/player";

import { SongPanelWrapper } from "./style";

const SongPanel = memo((props) => {
  const { detailInfo, lyricInfo } = props;

  // ?处理歌词信息的展示几行
  const [lyricHeight, setLyricHeight] = useState(327);
  const [showType, setShowType] = useState("open");

  function handleLyricShow(type) {
    if (type === "open") {
      setLyricHeight(lyricInfo.length * 23);
      setShowType("close");
    } else {
      setLyricHeight(327);
      setShowType("open");
    }
  }

  // ?播放按钮点击
  const dispatch = useDispatch();
  function handlePlaySong() {
    dispatch(changeCurrentSongAction(detailInfo));
  }

  return (
    <SongPanelWrapper lyricHeight={lyricHeight}>
      <div className="left-cover">
        <div className="cover_img">
          <img src={detailInfo?.al?.picUrl} alt="" />
          <span className="cover"></span>
        </div>
        <div className="tip">
          <span className="tip-icon"></span>
          <span className="outer-link">生成外链播放器</span>
        </div>
      </div>
      <div className="right-content">
        <div className="top-info">
          <div className="name">
            <span className="icon"></span>
            <span className="text omit">{detailInfo.name}</span>
          </div>
          <div className="singer">
            <span className="title">歌手：</span>
            {detailInfo.ar && (
              <span className="text">{detailInfo?.ar[0]?.name}</span>
            )}
          </div>
          <div className="album">
            <span className="title">所属专辑：</span>
            <span className="text">{detailInfo?.al?.name}</span>
          </div>
          <div className="btn-wrap">
            <div className="player">
              <span className="icon"></span>
              <span className="text" onClick={() => handlePlaySong()}>
                播放
              </span>
              <span className="left-icon"></span>
            </div>
            <div className="collect">
              <span className="icon"></span>
              <span className="text">收藏</span>
              <span className="left-icon"></span>
            </div>
            <div className="share">
              <span className="icon"></span>
              <span className="text">分享</span>
              <span className="left-icon"></span>
            </div>
            <div className="download">
              <span className="icon"></span>
              <span className="text">下载</span>
              <span className="left-icon"></span>
            </div>
            <div className="message">
              <span className="icon"></span>
              <span className="text">信息</span>
              <span className="left-icon"></span>
            </div>
          </div>
        </div>
        <div className="bottom-lyric">
          <div className="lyric-info">
            {lyricInfo?.map((item, index) => {
              return (
                <div key={index} className="item">
                  {item.content}
                </div>
              );
            })}
          </div>
          <div className="tip-btn">
            {showType === "open" && (
              <span className="open" onClick={() => handleLyricShow("open")}>
                展开
              </span>
            )}
            {showType === "close" && (
              <span className="close" onClick={() => handleLyricShow("close")}>
                收起
              </span>
            )}
          </div>
        </div>
      </div>
    </SongPanelWrapper>
  );
});

SongPanel.propTypes = {
  detailInfo: PropTypes.object,
  lyricInfo: PropTypes.array,
};

export default SongPanel;
