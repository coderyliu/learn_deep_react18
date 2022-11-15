import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getFormatDate } from "@/utils/format";

import { MenuHeaderWrapper } from "./style";

const MenuHeader = memo((props) => {
  const { detailInfo } = props;
  const [topP, setTopP] = useState(0);

  // 路由
  const params = useParams();

  useEffect(() => {
    switch (params.type) {
      case "song":
        setTopP(-243);
        break;
      case "radio":
        setTopP(-1014);
        break;
      case "album":
        setTopP(-186);
        break;
      default:
        break;
    }
  }, []);

  return (
    <MenuHeaderWrapper topPosition={topP}>
      <div className="left-cover">
        <div className="cover_img">
          <img src={detailInfo.picUrl || detailInfo.coverImgUrl} alt="" />
        </div>
      </div>
      <div className="right-content">
        <div className="top-info">
          <div className="name">
            <span className="icon"></span>
            <span className="text omit">{detailInfo.name}</span>
          </div>
          {detailInfo.createTime && (
            <div className="create-time">
              <span className="title">创建时间：</span>
              <span className="text">
                {getFormatDate(detailInfo.createTime)}
              </span>
            </div>
          )}
          {detailInfo?.artist?.name && (
            <div className="singer">
              <span className="title">歌手：</span>
              <span className="text">{detailInfo?.artist?.name}</span>
            </div>
          )}
          {detailInfo.publishTime && (
            <div className="pub-time">
              <span className="title">发行时间：</span>
              <span className="text">{detailInfo.publishTime}</span>
            </div>
          )}
          {detailInfo.company && (
            <div className="pub-company">
              <span className="title">发行公司：</span>
              <span className="text">{detailInfo.company}</span>
            </div>
          )}
          <div className="btn-wrap">
            <div className="player">
              <span className="icon"></span>
              <span className="text">播放</span>
              <span className="left-icon"></span>
            </div>
            <div className="collect">
              <span className="icon"></span>
              <span className="text">收藏</span>
              <span className="left-icon"></span>
            </div>
            <div className="share">
              <span className="icon"></span>
              <span className="text">分享</span>
              <span className="left-icon"></span>
            </div>
            <div className="download">
              <span className="icon"></span>
              <span className="text">下载</span>
              <span className="left-icon"></span>
            </div>
            <div className="message">
              <span className="icon"></span>
              <span className="text">信息</span>
              <span className="left-icon"></span>
            </div>
          </div>
          {detailInfo.tags && (
            <div className="tag-wrap">
              <div className="title">标签：</div>
              <ul className="tag-list">
                {detailInfo.tags.map((item, index) => {
                  return (
                    <li key={index} className="item">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </MenuHeaderWrapper>
  );
});

MenuHeader.propTypes = {
  detailInfo: PropTypes.object,
};

export default MenuHeader;
