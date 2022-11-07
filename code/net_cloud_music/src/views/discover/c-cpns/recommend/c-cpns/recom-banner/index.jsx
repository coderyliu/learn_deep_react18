import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";

import { Carousel } from "antd";
import { RecommendBannerWrapper } from "./style";

const RecommendBanner = memo((props) => {
  const { banners } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef();

  // 处理指示器的点击
  function handleIndicatorClick(index) {
    setCurrentIndex(index);
    bannerRef.current.goTo(index);
  }

  // 处理轮播图的自动播放
  function onBannerChange(currentSlider) {
    setCurrentIndex(currentSlider);
  }

  // 处理左右按钮的点击
  function handleBtnClick(isRight = true) {
    let index;
    if (isRight) {
      index = currentIndex < banners.length - 1 ? currentIndex + 1 : 0;
      bannerRef.current.next();
    } else {
      index = currentIndex <= 0 ? banners.length - 1 : currentIndex - 1;
    }

    bannerRef.current.goTo(index);
  }

  return (
    <div>
      {banners.length && (
        <RecommendBannerWrapper bgImage={banners[currentIndex]}>
          <div className="content">
            <div
              className="left-arrow"
              onClick={() => handleBtnClick(false)}
            ></div>
            <div
              className="right-arrow"
              onClick={() => handleBtnClick(true)}
            ></div>
            <Carousel
              autoplay
              dots={false}
              effect="fade"
              ref={bannerRef}
              afterChange={onBannerChange}
            >
              {banners.map((item, index) => {
                return (
                  <div className="item" key={item.targetId}>
                    <img src={item.imageUrl} alt="" />
                  </div>
                );
              })}
            </Carousel>
            <div className="indicator">
              {banners.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={currentIndex === index ? "iten active" : "iten"}
                    onClick={(e) => handleIndicatorClick(index)}
                  ></div>
                );
              })}
            </div>
          </div>
        </RecommendBannerWrapper>
      )}
    </div>
  );
});

RecommendBanner.propTypes = {
  banners: PropTypes.array,
};

export default RecommendBanner;
