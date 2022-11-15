import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import { DownloadSectionWrapper } from "./style";

const DownloadSection = memo(() => {
  // ?跳转至下载页
  const navigate=useNavigate()
  function navigateToDownload(){
    navigate('/download')
  }

  return (
    <DownloadSectionWrapper>
      <div className="top">网易云音乐多端下载</div>
      <div className="bg_cover" onClick={()=>navigateToDownload()}>
        <span className="d-text">同步歌单，随时畅听 320K 好音乐</span>
      </div>  
    </DownloadSectionWrapper>
  );
});

export default DownloadSection;
