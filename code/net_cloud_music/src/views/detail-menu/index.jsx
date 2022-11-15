import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

import {
  fetchAlbumList,
  fetchRadioList,
  fetchSongList,
} from "@/store/modules/menu";
import { rankTableList } from "@/assets/data/header-table";

import MenuHeader from "./c-cpns/menu-header";
import PlayerSection from "@/components/player-section";
import ListenerSection from "./c-cpns/listener-section";
import SongPlayList from "../player/c-cpns/same-playlist";
import DownloadSection from "@/components/download-section";
import { DetailMenuWrapper } from "./style";

const DetailMenu = memo(() => {
  const [detailList, setDetailList] = useState([]);
  const [detailInfo, setDetailInfo] = useState({});
  const [playlist, setPlaylist] = useState([]);
  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [isShowPlayCount, setIsShowPlayCount] = useState(false);
  const [isShowTable, setIsShowTable] = useState(true);

  // redux相关
  const {
    songList,
    likeSongUser,
    hotSongMenu,
    albumSongs,
    albumInfo,
    otherAlbum,
    radioSongs,
    radioDetail,
    hotRadio,
    currentSealData,
  } = useSelector(
    (state) => ({
      songList: state.menu.songList,
      likeSongUser: state.menu.likeSongUser,
      songCountDetail: state.menu.songCountDetail,
      hotSongMenu: state.menu.hotSongMenu,
      albumSongs: state.menu.albumSongs,
      albumInfo: state.menu.albumInfo,
      otherAlbum: state.menu.otherAlbum,
      radioSongs: state.menu.radioSongs,
      radioDetail: state.menu.radioDetail,
      hotRadio: state.menu.hotRadio,
      currentSealData: state.menu.currentSealData,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // ?获取传递过来的params.id params.type
  const params = useParams();
  const [searchParams] = useSearchParams();
  const query = Object.fromEntries(searchParams);

  // 网络请求
  useEffect(() => {
    switch (params.type) {
      case "song":
        dispatch(fetchSongList({ id: params.id }));
        break;
      case "radio":
        dispatch(fetchRadioList({ id: params.id }));
        break;
      case "album":
        dispatch(fetchAlbumList({ id: params.id, rid: query.rid }));
        break;
      default:
        break;
    }
  }, [dispatch, params.type, params.id,query.rid]);

  // 处理细节
  function changeStateFn(
    list,
    info,
    play,
    tit,
    subtitle,
    isShowCount,
    showTable
  ) {
    setDetailList(list);
    setDetailInfo(info);
    setPlaylist(play);
    setTitle(tit);
    setSubTitle(subtitle);
    setIsShowPlayCount(isShowCount);
    setIsShowTable(showTable);
  }

  useEffect(() => {
    switch (params.type) {
      case "song":
        changeStateFn(
          songList,
          currentSealData,
          hotSongMenu,
          "歌曲",
          "热门歌单",
          false,
          true
        );
        break;
      case "radio":
        changeStateFn(
          radioSongs,
          radioDetail,
          hotRadio,
          "节目",
          "你可能也喜欢",
          false,
          false
        );
        break;
      case "album":
        changeStateFn(
          albumSongs,
          albumInfo,
          otherAlbum,
          "包含曲目",
          "Ta的其他热门歌单",
          false,
          true
        );
        break;
      default:
        break;
    }
  }, [
    songList,
    albumSongs,
    radioSongs,
    otherAlbum,
    hotSongMenu,
    hotRadio,
    albumInfo,
    currentSealData,
    radioDetail,
    params.type,
  ]);

  return (
    <DetailMenuWrapper>
      <div className="detail-wrap">
        <div className="detail-left">
          <MenuHeader detailInfo={detailInfo}></MenuHeader>
          <PlayerSection
            tableList={rankTableList}
            detail={detailList}
            title={title}
            isShowTopImage={false}
            isShowPlayCount={isShowPlayCount}
            isShowTable={isShowTable}
          ></PlayerSection>
        </div>
        <div className="detail-right">
          {params.type === "song" && (
            <ListenerSection userList={likeSongUser}></ListenerSection>
          )}
          <SongPlayList playlist={playlist} title={subTitle}></SongPlayList>
          <DownloadSection></DownloadSection>
        </div>
      </div>
    </DetailMenuWrapper>
  );
});

export default DetailMenu;
