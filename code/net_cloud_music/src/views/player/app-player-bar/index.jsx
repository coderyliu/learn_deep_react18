import React, { memo, useEffect, useRef } from "react";
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Slider } from "antd";

import { getPlayUrl, secondToMinuteFn } from "@/utils/format";

import { AppPlayerBarWrapper } from "./style";
import { fetchPlayerData } from "@/store/modules/player";
import { useNavigate } from "react-router-dom";

const AppPlayerBar = memo(() => {
  // ?组件状态相关
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [durationTime, setDurationTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isChange, setIsChange] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [isSingle, setIsSingle] = useState(false);
  const [isOrder, setIsOrder] = useState(true);

  // ?redux相关
  const { currentSong, playlist } = useSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      playlist: state.player.playlist,
    }),
    shallowEqual
  );

  // ?获取歌曲信息详情
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlayerData({ id: currentSong.id, isGetCate: false }));
  }, [dispatch]);

  // ?获取audio元素
  const audioRef = useRef();
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
    setDurationTime(currentSong.dt);
  }, [currentSong]);

  // ?处理歌曲播放顺序
  function handleSongOrder(type) {}

  // ?处理歌曲时间更新事件
  function timeUpdate(e) {
    const currentTime = e.target.currentTime;
    if (!isChange) {
      setCurrentTime(currentTime);
      setSliderValue(((currentTime * 1000) / durationTime) * 100);
    }
  }

  // ?处理歌曲播放完毕
  function timeEnded(e) {
    
  }

  // ?监听歌曲播放,进度条改变
  function sliderChange(value) {
    console.log(value);
  }

  // ?处理进度条拖拽
  function afterChange(value) {
    console.log(value);
  }

  // ?跳转至歌曲详情页
  const navigate = useNavigate();
  function handleNavigatePlayer() {
    navigate(`/song/${currentSong.id}`);
  }

  return (
    <AppPlayerBarWrapper>
      <div className="player-bar-wrap">
        <div className="control-btns">
          <span className="prev"></span>
          {!isPlaying && <span className="stop"></span>}
          {isPlaying && <span className="start"></span>}
          <span className="next"></span>
        </div>
        <div className="infos">
          <div className="cover_pic" onClick={() => handleNavigatePlayer()}>
            <img src={currentSong?.al?.picUrl} alt="" />
          </div>
          <div className="progress">
            <div className="info">
              <span className="name">{currentSong.name}</span>
              {/* <span className="singer">{currentSong.ar[0].name}</span> */}
            </div>
            <div className="slider">
              <Slider
                value={sliderValue}
                onChange={sliderChange}
                onAfterChange={afterChange}
              />
              <div className="time">
                <span className="currentTime">
                  {secondToMinuteFn(currentTime * 1000)}
                </span>
                <span className="gap">/</span>
                <span className="totalTIme">
                  {secondToMinuteFn(durationTime)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="player-btns">
          <div className="left">
            <span className="section add"></span>
            <span className="section share"></span>
          </div>
          <div className="right">
            <span className="section sound"></span>
            {isLoop && (
              <span
                className="section loop"
                onClick={(e) => handleSongOrder("loop")}
              ></span>
            )}
            {isSingle && (
              <span
                className="section single"
                onClick={(e) => handleSongOrder("single")}
              ></span>
            )}
            {isOrder && (
              <span
                className="section order"
                onClick={(e) => handleSongOrder("order")}
              ></span>
            )}
            <span className="section playlist">{playlist.length}</span>
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        crossOrigin={true}
        onTimeUpdate={timeUpdate}
        onEnded={timeEnded}
      ></audio>
    </AppPlayerBarWrapper>
  );
});

export default AppPlayerBar;
