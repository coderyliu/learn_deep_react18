import React, { memo, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import SectionItem from "@/components/section-item";
import { EntireRoomWrapper } from "./style";
import { changeDetailInfoAction } from "@/store/modules/detail";

const EntireRoom = memo((props) => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleItemClick = useCallback(
    (itemData) => {
      dispatch(changeDetailInfoAction(itemData));
      navigate("/detail");
    },
    [navigate, dispatch]
  );

  return (
    <EntireRoomWrapper>
      <div className="entire-title">
        <h2>{totalCount}多处住宿</h2>
      </div>
      <div className="entire-list">
        {roomList.map((item, index) => {
          return (
            <SectionItem
              itemWidth="20%"
              key={item._id}
              itemData={item}
              itemClick={handleItemClick}
            ></SectionItem>
          );
        })}
      </div>
      {isLoading && <div className="entire-cover"></div>}
    </EntireRoomWrapper>
  );
});

export default EntireRoom;
