import PropTypes from "prop-types";
import React, { memo } from "react";

import SectionItem from "../section-item";
import { SectionRoomsWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList, itemWidth } = props;

  return (
    <SectionRoomsWrapper>
      <div className="good-price-items">
        {roomList?.slice(0, 8)?.map((item) => {
          return (
            <SectionItem
              itemData={item}
              key={item.id}
              className="item"
              itemWidth={itemWidth}
            ></SectionItem>
          );
        })}
      </div>
    </SectionRoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.string,
};

export default SectionRooms;
