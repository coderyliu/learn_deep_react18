import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import { NewDiskItemV1Wrapper } from "./style";

const NewDiskItemV1 = memo((props) => {
  const {
    itemData,
    itemWidth = 118,
    itemHeight = 100,
    imgWidth = 80,
    paddingLeft = 20,
  } = props;

  // ?item点击跳转至歌曲列表详情页
  const navigate = useNavigate();
  function handleDiskItemClick() {
    navigate(`/detail/album/${itemData.id}?rid=${itemData.artist.id}`);
  }

  return (
    <NewDiskItemV1Wrapper
      itemWidth={itemWidth}
      itemHeight={itemHeight}
      imgWidth={imgWidth}
      paddingLeft={paddingLeft}
    >
      <div className="inner" onClick={() => handleDiskItemClick()}>
        <div className="bg-cover">
          <img src={itemData.artist.picUrl} alt="" />
        </div>
        <div className="info">
          <span className="song omit">{itemData.name}</span>
          <span className="singer omit">{itemData.artist.name}</span>
        </div>
      </div>
    </NewDiskItemV1Wrapper>
  );
});

NewDiskItemV1.propTypes = {
  itemData: PropTypes.object,
};

export default NewDiskItemV1;
