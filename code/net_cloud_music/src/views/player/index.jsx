import React, { memo, useEffect, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { message } from "antd";

import { fetchPlayerData } from "@/store/modules/player";
import { fetchCommentData } from "@/store/modules/comment";
import { getSendComment } from "@/services/modules/comment";

import SongPanel from "./c-cpns/song-panel";
import SongPlayList from "./c-cpns/same-playlist";
import SameSong from "./c-cpns/same-song";
import DownloadSection from "@/components/download-section";
import Comment from "../comment";
import { PlayerWrapper } from "./style";

const Player = memo(() => {
  // ?获取传入的参数id
  const params = useParams();

  // redux相关
  const { songDetailInfo, songLyricInfo, samePlaylist, sameSong } = useSelector(
    (state) => ({
      songDetailInfo: state.player.songDetailInfo,
      songLyricInfo: state.player.songLyricInfo,
      samePlaylist: state.player.samePlaylist,
      sameSong: state.player.sameSong,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlayerData({ id: params.id, isGetCate: true }));
    dispatch(fetchCommentData({ path: "song", id: params.id, type: 0 }));
  }, [dispatch, params.id]);

  // ?处理分页点击
  const paginationClick = useCallback(
    (v) => {
      dispatch(
        fetchCommentData({
          path: "song",
          id: params.id,
          type: 0,
          offset: (v - 1) * 20,
        })
      );
    },
    [dispatch, params.id]
  );

  // ?处理发表评论
  const commentClick = useCallback(
    (data) => {
      getSendComment(1, 0, params.id, data).then((res) => {
        message.success("发表评论成功!");
      });
    },
    [params.id]
  );

  return (
    <PlayerWrapper>
      <div className="player-wrapper">
        <div className="left-wrap">
          <SongPanel
            detailInfo={songDetailInfo}
            lyricInfo={songLyricInfo}
          ></SongPanel>
          <Comment
            paginationClick={paginationClick}
            commentClick={commentClick}
          ></Comment>
        </div>
        <div className="right-wrap">
          <SongPlayList playlist={samePlaylist}></SongPlayList>
          <SameSong sameSong={sameSong}></SameSong>
          <DownloadSection></DownloadSection>
        </div>
      </div>
    </PlayerWrapper>
  );
});

export default Player;
