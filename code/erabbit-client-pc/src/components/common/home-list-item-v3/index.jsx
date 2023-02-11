import PropTypes from "prop-types";
import React, { memo } from "react";
import { EyeOutlined, HeartOutlined, MessageOutlined } from "@ant-design/icons";

import { HomeListItemV3Wrapper } from "./style";

const HomeListItemV3 = memo((props) => {
  const { dataInfo } = props;

  return (
    <HomeListItemV3Wrapper>
      <div className="top-cover">
        <img src={dataInfo.cover} alt="" />
      </div>
      <div className="covered"></div>
      <div className="bottom-info">
        <ul className="left-info">
          <li className="item">
            <HeartOutlined />
            <span className="number">{dataInfo.collectNum}</span>
          </li>
          <li className="item">
            <EyeOutlined />
            <span className="number">{dataInfo.viewNum}</span>
          </li>
        </ul>
        <div className="right-info">
          <MessageOutlined />
          <span className="number">{dataInfo.replyNum}</span>
        </div>
      </div>
      <div className="cover-info">
        <div className="left-desc">
          <p className="title omit">{dataInfo.title}</p>
          <p className="summary omit">{dataInfo.summary}</p>
        </div>
        <p className="right-desc">￥{dataInfo.lowestPrice}起</p>
      </div>
    </HomeListItemV3Wrapper>
  );
});

HomeListItemV3.propTypes = {
  dataInfo: PropTypes.object,
};

export default HomeListItemV3;
