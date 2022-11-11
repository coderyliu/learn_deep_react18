import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";

import { fetchSongMenuData } from "@/store/modules/songMenu";

import HeaderSection from "@/components/header-section";
import AllSongMenu from "./c-cpns/all-song-menu";
import { SongMenuWrapper } from "./style";

const SongMenu = memo((props) => {
  const { categoryList, categoryData, totalCount } = useSelector(
    (state) => ({
      categoryList: state.songMenu.categoryList,
      categoryData: state.songMenu.categoryData,
      totalCount: state.songMenu.totalCount,
    }),
    shallowEqual
  );

  // ?redux相关
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchSongMenuData({ cat: "全部", limit: 35, offset: 0, isGetCate: true })
    );
  }, [dispatch]);

  // ?分页点击事件
  const count = Math.ceil(totalCount / 35);
  function handlePageChange(e, v) {
    dispatch(
      fetchSongMenuData({
        cat: "全部",
        limit: 35,
        offset: (v - 1) * 35,
        isGetCate: false,
      })
    );
  }

  return (
    <SongMenuWrapper>
      <div className="song-menu-wrapper">
        <HeaderSection title="全部" isShowMore={false}></HeaderSection>
        <AllSongMenu categoryData={categoryData}></AllSongMenu>
        <div className="pagination">
          <Pagination count={count} onChange={handlePageChange} />
        </div>
      </div>
    </SongMenuWrapper>
  );
});

export default SongMenu;
