import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

import { fetchArtistAlbum, fetchArtistData } from "@/store/modules/artist";

import Tabs from "./c-cpns/tabs";
import PlayerSection from "@/components/player-section";
import NewDiskItemV1 from "@/components/disk-item-v1";
import ArtistMv from "./c-cpns/artist-mv";
import ArtistDesc from "./c-cpns/artist-desc";
import DownloadSection from "@/components/download-section";
import { ArtistWrapper } from "./style";

const Artist = memo(() => {
  // route
  const params = useParams();

  // redux相关
  const {
    hotSingleSong,
    artistSealInfo,
    currentTab,
    albumList,
    albumMore,
    simiMv,
    artistInfo,
  } = useSelector(
    (state) => ({
      hotSingleSong: state.artist.hotSingleSong,
      artistSealInfo: state.artist.artistSealInfo,
      currentTab: state.artist.currentTab,
      albumList: state.artist.albumList,
      albumMore: state.artist.albumMore,
      simiMv: state.artist.simiMv,
      artistInfo: state.artist.artistInfo,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArtistData({ id: params.id }));
  }, [dispatch, params.id]);

  // ?处理disk的分页点击
  function handlePageChange(e, v) {
    dispatch(fetchArtistAlbum({ id: params.id, offset: (v - 1) * 12 }));
  }

  // ?元素tab栏切换
  let element = (
    <PlayerSection
      detail={hotSingleSong}
      isShowAr={false}
      isShowHeader={false}
      isShowTable={false}
      isShowTopImage={false}
    ></PlayerSection>
  );

  // useEffect(() => {
  switch (currentTab) {
    case "song":
      element = (
        <PlayerSection
          detail={hotSingleSong}
          isShowAr={false}
          isShowHeader={false}
          isShowTable={false}
          isShowTopImage={false}
        ></PlayerSection>
      );
      break;
    case "album":
      element = (
        <div className="disk-wrap">
          <div className="content-wrap">
            {albumList?.map((item, index) => {
              return (
                <NewDiskItemV1
                  itemData={item}
                  key={index}
                  itemWidth={140}
                  itemHeight={130}
                  imgWidth={100}
                  paddingLeft={21}
                ></NewDiskItemV1>
              );
            })}
          </div>
          <div className="pagination">
            <Pagination
              count={Math.ceil(albumMore / 12)}
              onChange={handlePageChange}
            />
          </div>
        </div>
      );
      break;
    case "mv":
      element = <ArtistMv listData={simiMv}></ArtistMv>;
      break;
    case "desc":
      element = <ArtistDesc detailInfo={artistInfo}></ArtistDesc>;
      break;
    default:
      break;
  }
  // }, [currentTab, hotSingleSong,albumList]);

  return (
    <ArtistWrapper>
      <div className="artist-wrap">
        <div className="left-cont">
          <div className="top-info">
            <div className="info">
              <span className="name">{artistSealInfo.name}</span>
              <ul className="alias-list">
                {artistSealInfo?.alias?.map((item, index) => {
                  return (
                    <li className="item" key={index}>
                      {item};
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="avatar">
              <img src={artistSealInfo.picUrl} alt="" />
            </div>
          </div>
          <Tabs></Tabs>
          {element}
        </div>
        <div className="right-cont">
          <DownloadSection></DownloadSection>
        </div>
      </div>
    </ArtistWrapper>
  );
});

export default Artist;
