import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchPlayerData } from "@/store/modules/player";

import SongPanel from "./c-cpns/song-panel";
import SongPlayList from "./c-cpns/same-playlist";
import SameSong from "./c-cpns/same-song";
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
  }, [dispatch]);

  return (
    <PlayerWrapper>
      <div className="player-wrapper">
        <div className="left-wrap">
          <SongPanel
            detailInfo={songDetailInfo}
            lyricInfo={songLyricInfo}
          ></SongPanel>
        </div>
        <div className="right-wrap">
          <SongPlayList playlist={samePlaylist}></SongPlayList>
          <SameSong sameSong={sameSong}></SameSong>
        </div>
      </div>
    </PlayerWrapper>
  );
});

export default Player;
