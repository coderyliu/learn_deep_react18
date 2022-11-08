import PropTypes from "prop-types";
import React, { memo, useState } from "react";

import { RankInfoWrapper } from "./style";

const RankInfo = memo((props) => {
  // ?props相关
  const { rankingInfo, toggleClick } = props;

  // ?设置item的active样式
  const [currentIndex, setCurrentIndex] = useState(0);

  // ?处理榜单分类的点击
  function handleRankingConClick(value,index) {
    setCurrentIndex(index);
    toggleClick(value);
  }

  return (
    <RankInfoWrapper>
      <div className="section feature">
        <div className="title">云音乐特色榜</div>
        <ul className="list">
          {rankingInfo?.slice(0, 4)?.map((item, index) => {
            return (
              <li
                key={item.name}
                className={currentIndex === index ? "item active" : "item"}
                onClick={() => handleRankingConClick(item, index)}
              >
                <div className="left">
                  <img src={item.coverImgUrl} alt="" />
                </div>
                <div className="right">
                  <span className="name">{item.name}</span>
                  <span className="update">{item.updateFrequency}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="section global">
        <div className="title">全球媒体榜</div>
        <ul className="list">
          {rankingInfo?.slice(4)?.map((item, index) => {
            return (
              <li
                key={item.name}
                className={currentIndex === index + 4 ? "item active" : "item"}
                onClick={() => handleRankingConClick(item, index + 4)}
              >
                <div className="left">
                  <img src={item.coverImgUrl} alt="" />
                </div>
                <div className="right">
                  <span className="name omit">{item.name}</span>
                  <span className="update">{item.updateFrequency}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </RankInfoWrapper>
  );
});

RankInfo.propTypes = {
  rankingInfo: PropTypes.array,
  toggleClick: PropTypes.func,
};

export default RankInfo;
