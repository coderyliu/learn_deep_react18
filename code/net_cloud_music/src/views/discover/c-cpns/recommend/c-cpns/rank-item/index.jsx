import PropTypes from "prop-types";
import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getSongDetailAction } from "@/store/modules/player";

import { RankItemWrapper } from "./style";
import { checkMusicCanPlay } from "@/services/modules/player";
import { changeIsShowVipAction } from "@/store/modules/main";

const RankItem = memo((props) => {
  const { rankInfo } = props;

  // ?处理点击跳转到歌曲详情页
  const navigate = useNavigate();
  function handleNavigatePlayer(data) {
    navigate(`/song/${data.id}`);
  }

  // ?处理歌曲播放
  const dispatch = useDispatch();
  function handleSongPlayerClick(data) {
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
    dispatch(getSongDetailAction(data));
  }

  // ?跳转至toplist
  function handleNavigateToTopList() {
    navigate("/discover/toplist");
  }

  return (
    <RankItemWrapper>
      <div className="rank-name">
        <div className="left" onClick={() => handleNavigateToTopList()}>
          <img src={rankInfo.coverImgUrl} alt="" />
        </div>
        <div className="right">
          <div className="name" onClick={() => handleNavigateToTopList()}>
            {rankInfo.name}
          </div>
          <div className="btn">
            <span className="start"></span>
            <span className="add"></span>
          </div>
        </div>
      </div>
      <div className="rank-list">
        {rankInfo?.tracks?.slice(0, 10)?.map((item, index) => {
          return (
            <div className="item" key={item.id}>
              <span className={index <= 2 ? "index active" : "index"}>
                {index + 1}
              </span>
              <span
                className="name omit"
                onClick={() => handleNavigatePlayer(item)}
              >
                {item.name}
              </span>
              <div className="control">
                <span
                  className="play"
                  onClick={() => handleSongPlayerClick(item)}
                ></span>
                <span
                  className="add"
                  onClick={() => handleAddPlaylist(item)}
                ></span>
                <span className="collect"></span>
              </div>
            </div>
          );
        })}
        <div className="item">查看全部&gt;</div>
      </div>
    </RankItemWrapper>
  );
});

RankItem.propTypes = {
  rankInfo: PropTypes.object,
};

export default RankItem;
