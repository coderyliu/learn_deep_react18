import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import { getFormatDate } from "@/utils/format";

import { MVItemV1Wrapper } from "./style";

const MvItemV1 = memo((props) => {
  const { itemData } = props;

  // ?处理mv item点击
  const navigate=useNavigate()
  function handleMVItemClick(){
    navigate(`/mv/${itemData.id}`)
  }

  return (
    <MVItemV1Wrapper>
      <div className="picture" onClick={()=>handleMVItemClick()}>
        <img src={itemData.imgurl} alt="" />
        <div className="play-icon"></div>
      </div>
      <div className="info" onClick={()=>handleMVItemClick()}>
        <span className="name omit">{itemData.name}</span>
        <span className="time">{getFormatDate(itemData.publishTime)}</span>
      </div>
    </MVItemV1Wrapper>
  );
});

MvItemV1.propTypes = {
  itemData: PropTypes.object,
};

export default MvItemV1;
