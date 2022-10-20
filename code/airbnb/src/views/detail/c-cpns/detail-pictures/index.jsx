import PictureBrowser from "@/base-ui/picture-browser";
import React, { memo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { DetailPicturesWrapper } from "./style";

const DetailPictures = memo((props) => {
  // 是否展示图片浏览器
  const [showBrowser, setShowBrowser] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // redux中的状态
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );

  // 事件处理逻辑
  function handlePictureClick(index) {
    setStartIndex(index);
    setShowBrowser(true);
  }

  return (
    <DetailPicturesWrapper>
      <div className="pictures-wrapper">
        <div className="left">
          <div className="item" onClick={(e) => handlePictureClick(0)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" className="cover" />
            <div className="bg-cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls?.slice(1, 5).map((item, index) => {
            return (
              <div
                className="item"
                key={item}
                onClick={(e) => handlePictureClick(index+1)}
              >
                <img src={item} alt="" className="cover" />
                <div className="bg-cover"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="show-btn" onClick={(e) => setShowBrowser(true)}>
        显示照片
      </div>
      {showBrowser && (
        <PictureBrowser
          pictureUrls={detailInfo?.picture_urls}
          startIndex={startIndex}
          closeClick={(e) => setShowBrowser(false)}
        ></PictureBrowser>
      )}
    </DetailPicturesWrapper>
  );
});

export default DetailPictures;
