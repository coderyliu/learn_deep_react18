import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Slider } from "antd";

import { getPlayUrl, secondToMinuteFn } from "@/utils/format";

import { AppPlayerBarWrapper } from "./style";
import {
  changePlaySequenceAction,
  changeSongPlayAction,
  getSongDetailAction,
} from "@/store/modules/player";

const AppPlayerBar = memo(() => {
  // ?组件状态相关
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [durationTime, setDurationTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isChange, setIsChange] = useState(false);

  // ?redux相关
  const { currentSong, playlist, playSequence } = useSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      playlist: state.player.playlist,
      playSequence: state.player.playSequence,
    }),
    shallowEqual
  );

  // ?获取歌曲信息详情
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongDetailAction({ id: currentSong.id }));
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

  // ?处理进度条
  useEffect(() => {
    setIsChange(false);
  }, [isChange]);

  // todo 处理播放按钮点击
  function handlePlayStatus(type) {
    setIsPlaying(!isPlaying);
    if (type === "stop") {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }

  // todo 处理上一首下一首点击
  function handleChangeSong(tag) {
    dispatch(changeSongPlayAction({ tag }));
  }

  // ?处理歌曲播放顺序
  function handleSongOrder(type) {
    if (type === 2) {
      dispatch(changePlaySequenceAction(0));
    } else {
      dispatch(changePlaySequenceAction(type + 1));
    }
  }

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
    if (playSequence === 2 || playlist.length === 1) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeSongPlayAction(1));
    }
  }

  // ?监听歌曲播放,进度条改变
  const sliderChange = useCallback(
    (value) => {
      setSliderValue(value);
      const time = ((value / 100) * durationTime) / 1000;

      audioRef.current.currentTime = time;
      setCurrentTime(time);
      setIsChange(true);
    },
    [durationTime]
  );

  // ?处理进度条拖拽
  const afterChange = useCallback(
    (value) => {
      const time = ((value / 100) * durationTime) / 1000;
      audioRef.current.currentTime = time;

      setCurrentTime(time);
      setIsChange(true);
      if (!isPlaying) {
        handlePlayStatus("start");
      }
    },
    [durationTime, isPlaying, handlePlayStatus]
  );

  // ?跳转至歌曲详情页
  const navigate = useNavigate();
  function handleNavigatePlayer() {
    navigate(`/song/${currentSong.id}`);
  }

  return (
    <AppPlayerBarWrapper>
      <div className="player-bar-wrap">
        <div className="control-btns">
          <span className="prev" onClick={() => handleChangeSong(-1)}></span>
          {!isPlaying && (
            <span
              className="start"
              onClick={() => handlePlayStatus("start")}
            ></span>
          )}
          {isPlaying && (
            <span
              className="stop"
              onClick={() => handlePlayStatus("stop")}
            ></span>
          )}
          <span className="next" onClick={() => handleChangeSong(1)}></span>
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
            {playSequence === 1 && (
              <span
                className="section loop"
                onClick={(e) => handleSongOrder(1)}
              ></span>
            )}
            {playSequence === 2 && (
              <span
                className="section single"
                onClick={(e) => handleSongOrder(2)}
              ></span>
            )}
            {playSequence === 0 && (
              <span
                className="section order"
                onClick={(e) => handleSongOrder(0)}
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
