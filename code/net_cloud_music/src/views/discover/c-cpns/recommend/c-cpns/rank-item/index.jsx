import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import { RankItemWrapper } from "./style";

const RankItem = memo((props) => {
  const { rankInfo } = props;

  // ?处理点击跳转到歌曲详情页
  const navigate=useNavigate()
  function handleNavigatePlayer(data){
    navigate(`/song/${data.id}`)
  }

  return (
    <RankItemWrapper>
      <div className="rank-name">
        <div className="left">
          <img src={rankInfo.coverImgUrl} alt="" />
        </div>
        <div className="right">
          <div className="name">{rankInfo.name}</div>
          <div className="btn">
            <span className="start"></span>
            <span className="add"></span>
          </div>
        </div>
      </div>
      <div className="rank-list">
        {rankInfo?.tracks?.slice(0, 10)?.map((item, index) => {
          return (
            <div className="item" key={item.id}>
              <span className={index <= 2 ? "index active" : "index"}>
                {index + 1}
              </span>
              <span className="name omit" onClick={()=>handleNavigatePlayer(item)}>{item.name}</span>
            </div>
          );
        })}
        <div className="item">查看全部&gt;</div>
      </div>
    </RankItemWrapper>
  );
});

RankItem.propTypes = {
  rankInfo: PropTypes.object,
};

export default RankItem;
