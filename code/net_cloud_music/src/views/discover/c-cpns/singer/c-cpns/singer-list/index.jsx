import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import { SingerListWrapper } from "./style";

const SingerList = memo((props) => {
  const { itemList } = props;

  // ?处理singer item的点击
  const navigate = useNavigate();
  function handleSingerItemClick(data) {
    navigate(`/artist/${data.id}`);
  }

  return (
    <SingerListWrapper>
      {itemList?.slice(10)?.map((item, index) => {
        return (
          <div
            className="singer-wrap"
            key={item.id}
            onClick={() => handleSingerItemClick(item)}
          >
            <span className="name">{item.name}</span>
            <span className="icon"></span>
          </div>
        );
      })}
    </SingerListWrapper>
  );
});

SingerList.propTypes = {
  itemList: PropTypes.array,
};

export default SingerList;
