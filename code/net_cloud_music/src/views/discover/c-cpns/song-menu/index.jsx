import React, { memo, useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";

import {
  changeIsShowModalAction,
  fetchSongMenuData,
} from "@/store/modules/songMenu";

import HeaderSection from "@/components/header-section";
import AllSongMenu from "./c-cpns/all-song-menu";
import CategorySection from "./c-cpns/category-section";
import { SongMenuWrapper } from "./style";

const SongMenu = memo((props) => {
  const {
    categoryList,
    categoryData,
    currentCate,
    totalCount,
    isShowSelectModal,
  } = useSelector(
    (state) => ({
      categoryList: state.songMenu.categoryList,
      categoryData: state.songMenu.categoryData,
      currentCate: state.songMenu.currentCate,
      totalCount: state.songMenu.totalCount,
      isShowSelectModal: state.songMenu.isShowSelectModal,
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
        cat: currentCate,
        limit: 35,
        offset: (v - 1) * 35,
        isGetCate: false,
      })
    );
  }

  // ?处理选择按钮点击
  const handleSelectClick = useCallback(() => {
    dispatch(changeIsShowModalAction(!isShowSelectModal));
  }, [dispatch, isShowSelectModal]);

  return (
    <SongMenuWrapper>
      <div className="song-menu-wrapper">
        <HeaderSection
          title="全部"
          isShowMore={false}
          isShowBtn={true}
          categoryList={categoryList}
          btnClick={handleSelectClick}
        ></HeaderSection>
        <AllSongMenu categoryData={categoryData}></AllSongMenu>
        <div className="pagination">
          <Pagination count={count} onChange={handlePageChange} />
        </div>
        {isShowSelectModal && (
          <CategorySection categoryList={categoryList}></CategorySection>
        )}
      </div>
    </SongMenuWrapper>
  );
});

export default SongMenu;
