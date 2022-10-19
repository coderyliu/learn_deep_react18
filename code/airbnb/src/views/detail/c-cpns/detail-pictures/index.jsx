import React, { memo } from "react";
import { useSelector } from "react-redux";

import { DetailPicturesWrapper } from "./style";

const DetailPictures = memo((props) => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo,
  }));

  return (
    <DetailPicturesWrapper>
      <div className="pictures-wrapper">
        <div className="left">
          <div className="item">
            <img src={detailInfo?.picture_urls?.[0]} alt="" className="cover" />
            <div className="bg-cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls?.slice(1, 5).map((item) => {
            return (
              <div className="item" key={item}>
                <img src={item} alt="" className="cover" />
                <div className="bg-cover"></div>
              </div>
            );
          })}
        </div>
      </div>
    </DetailPicturesWrapper>
  );
});

export default DetailPictures;
