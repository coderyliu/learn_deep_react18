import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { MVPlayCpnWrapper } from "./style";

const MVPlayCpn = memo((props) => {
  const { mvInfo, address, countInfo } = props;

  // mv视频相关
  const videoRef = useRef();

  // ?播放视频
  useEffect(() => {
    videoRef.current.src = address;
  }, [address]);

  // ?处理歌手名点击
  const navigate = useNavigate();
  function handleSingerClick() {
    navigate(`/artist/${mvInfo.artists[0].id}`);
  }

  return (
    <MVPlayCpnWrapper>
      <div className="top">
        <span className="icon"></span>
        <span className="title omit">{mvInfo.name}</span>
        <span className="name omit" onClick={() => handleSingerClick()}>
          {mvInfo.artistName}
        </span>
      </div>
      <video
        ref={videoRef}
        controls
        autoPlay
        crossOrigin={true}
        width="640px"
        height="360px"
      ></video>
      <div className="count-wrap">
        <div className="outer">
          <div className="like item">
            <span className="icon like-icon"></span>
            <span className="count">{countInfo.likedCount}</span>
          </div>
        </div>
        <div className="outer2">
          <div className="collect item">
            <span className="icon collect-icon"></span>
            <span className="count">70</span>
          </div>
        </div>
        <div className="outer3">
          <div className="share item">
            <span className="icon share-icon"></span>
            <span className="count">{countInfo.shareCount}</span>
          </div>
        </div>
      </div>
    </MVPlayCpnWrapper>
  );
});

MVPlayCpn.propTypes = {
  mvInfo: PropTypes.object,
  address: PropTypes.string,
  countInfo: PropTypes.object,
};

export default MVPlayCpn;
