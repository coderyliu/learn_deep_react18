import PropTypes from "prop-types";
import React, { memo } from "react";

import SectionItem from "../section-item";
import { SectionRoomsWrapper } from "./style";

const SectionRooms = memo((props) => {
  const {roomList}=props

  return (
    <SectionRoomsWrapper>
      <div className="good-price-items">
        {roomList?.slice(0, 8)?.map((item) => {
          return (
            <SectionItem
              itemData={item}
              key={item.id}
              className="item"
            >
            </SectionItem>
          );
        })}
      </div>
    </SectionRoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList:PropTypes.array
};

export default SectionRooms;
