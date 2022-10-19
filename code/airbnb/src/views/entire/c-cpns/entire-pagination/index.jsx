import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";

import { fetchEntireData } from "@/store/modules/entire/actionCreators";

import { EntirePaginationWrapper } from "./style";

const EntirePagination = memo((props) => {
  // redux中的状态数据
  const { currentPage, roomList, totalCount } = useSelector(
    (state) => ({
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
    }),
    shallowEqual
  );

  // 分页逻辑处理
  const count = Math.ceil(totalCount / 20);
  const startNum = currentPage * 20 + 1;
  const endNum = (currentPage + 1) * 20;

  // 事件处理
  const dispatch = useDispatch();
  function handlePageChange(e, pageCount) {
    dispatch(fetchEntireData(pageCount - 1));
  }

  return (
    <EntirePaginationWrapper>
      {!!roomList.length && (
        <div className="pagination">
          <Pagination count={count} onChange={handlePageChange} />
          <div className="info">
            第 {startNum} - {endNum} 个房源，共超过 {totalCount} 个
          </div>
        </div>
      )}
    </EntirePaginationWrapper>
  );
});

export default EntirePagination;
