import PropTypes from "prop-types";
import React, { memo } from "react";

import { SettleSingerWrapper } from "./style";

const SettleSinger = memo((props) => {
  const { artists, isShowApply=true ,title} = props;

  return (
    <SettleSingerWrapper>
      <div className="header-section">
        <div className="title">{title}</div>
        {
          isShowApply && <div className="more">查看更多 &gt;</div>
        }
      </div>
      <div className="artist-list">
        {artists?.slice(0, 5)?.map((item, index) => {
          return (
            <div className="item" key={item.id}>
              <div className="left">
                <img src={item.img1v1Url || item.avatarUrl} alt="" />
              </div>
              <div className="right">
                <div className="name">{item.name||item.nickName}</div>
                { isShowApply && <div className="disk omit">专辑代表：{item.alias}</div> }
              </div>
            </div>
          );
        })}
      </div>
      {isShowApply && <div className="apply">申请成为网易音乐人</div>}
    </SettleSingerWrapper>
  );
});

SettleSinger.propTypes = {
  artists: PropTypes.array,
  isShowApply: PropTypes.bool,
  title:PropTypes.string
};

export default SettleSinger;
