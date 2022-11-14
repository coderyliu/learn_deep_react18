import React, { memo } from "react";

import { DownloadWrapper } from "./style";

const Download = memo(() => {
  return (
    <DownloadWrapper>
      <div className="top_wrap">
        <div className="section pc">
          <h3 className="title">在电脑上听</h3>
          <div className="pic">
            <img src={require("@/assets/img/download_pc.jpeg")} alt="" />
          </div>
          <div className="download-btn">
            <span>下载电脑端</span>
          </div>
        </div>
        <div className="section phone">
          <h3 className="title">在手机上听</h3>
          <div className="pic">
            <img src={require("@/assets/img/download_phone.jpeg")} alt="" />
          </div>
          <div className="download-btn">
            <span>下载手机端</span>
          </div>
        </div>
      </div>
      <div className="list_wrap">
        <div className="section cd">
          <div className="info">
            <div className="title">千万曲库 首首 CD 音质</div>
            <div className="desc">
              囊括百万无损SQ音乐，你在用手机听歌时，
              <br />
              也能感受到纤毫毕现的CD音质，更能免费离线收听
            </div>
          </div>
          <div className="picture">
            <img src={require("@/assets/img/download1.jpeg")} alt="" />
          </div>
        </div>
        <div className="section star">
          <div className="info">
            <div className="title">千位明星 亲自推荐音乐</div>
            <div className="desc">
              韩红，戴佩妮等
              <span className="protrude">千位明星已入驻</span>
              ，亲自创建私房歌单，录制独
              <br />
              家DJ节目，推荐他们心中的好音乐
            </div>
          </div>
          <div className="picture">
            <img src={require("@/assets/img/download2.jpeg")} alt="" />
          </div>
        </div>
        <div className="section find">
          <div className="info">
            <div className="title">社交关系 发现全新音乐</div>
            <div className="desc">
              你可以
              <span className="protrude">关注明星</span>
              、DJ和好友，通过浏览他们的动态、收藏和
              <br />
              分享，发现更多全新好音乐
            </div>
          </div>
          <div className="picture">
            <img src={require("@/assets/img/download3.jpeg")} alt="" />
          </div>
        </div>
        <div className="section cloud">
          <div className="info">
            <div className="title">手机电脑 歌单实时同步</div>
            <div className="desc">
              只要一个帐号，你就可以同步在手机、电脑上创建、收藏
              <br />
              的歌单，
              <span className="protrude">随时随地畅享好音乐</span>
            </div>
          </div>
          <div className="picture">
            <img src={require("@/assets/img/download4.jpeg")} alt="" />
          </div>
        </div>
        <div className="section listen">
          <div className="info">
            <div className="title">听歌识曲 助你疯狂猜歌</div>
            <div className="desc">
              歌曲很动听却不知道歌名，歌名在嘴边却想不起来……
              <br />用<span className="protrude">听歌识曲</span>
              功能，几秒钟就知道歌名
            </div>
          </div>
          <div className="picture">
            <img src={require("@/assets/img/download5.jpeg")} alt="" />
          </div>
        </div>
      </div>
      <div className="code">
        <img src={require('@/assets/img/download_code.png')} alt="" />
        <span className="text">扫描二维码下载</span>
      </div>
    </DownloadWrapper>
  );
});

export default Download;
