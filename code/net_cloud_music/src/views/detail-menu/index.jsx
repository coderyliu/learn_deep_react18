import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  fetchAlbumList,
  fetchRadioList,
  fetchSongList,
} from "@/store/modules/menu";
import { rankTableList } from "@/assets/data/header-table";

import MenuHeader from "./c-cpns/menu-header";
import PlayerSection from "@/components/player-section";
import { DetailMenuWrapper } from "./style";

const DetailMenu = memo(() => {
  const [detailList, setDetailList] = useState([]);
  const [detailInfo, setDetailInfo] = useState({});
  const [title, setTitle] = useState();
  const [isShowPlayCount, setIsShowPlayCount] = useState(false);
  const [isShowTable, setIsShowTable] = useState(true);

  // redux相关
  const {
    songList,
    songCountDetail,
    albumSongs,
    albumInfo,
    radioSongs,
    radioDetail,
    currentSealData,
  } = useSelector(
    (state) => ({
      songList: state.menu.songList,
      songCountDetail: state.menu.songCountDetail,
      albumSongs: state.menu.albumSongs,
      albumInfo: state.menu.albumInfo,
      radioSongs: state.menu.radioSongs,
      radioDetail: state.menu.radioDetail,
      currentSealData: state.menu.currentSealData,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // ?获取传递过来的params.id params.type
  const params = useParams();

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
        dispatch(fetchAlbumList({ id: params.id }));
        break;
      default:
        break;
    }
  }, [dispatch, params.type, params.id]);

  // 处理细节
  function changeStateFn(list, info, tit, isShowCount, showTable) {
    setDetailList(list);
    setDetailInfo(info);
    setTitle(tit);
    setIsShowPlayCount(isShowCount);
    setIsShowTable(showTable);
  }

  useEffect(() => {
    switch (params.type) {
      case "song":
        changeStateFn(songList, currentSealData, "歌曲", false, true);
        break;
      case "radio":
        changeStateFn(radioSongs, radioDetail, "节目", false, false);
        break;
      case "album":
        changeStateFn(albumSongs, albumInfo, "包含曲目", false, true);
        break;
      default:
        break;
    }
  }, [songList, albumSongs, radioSongs, params.type]);

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
        <div className="detail-right"></div>
      </div>
    </DetailMenuWrapper>
  );
});

export default DetailMenu;
