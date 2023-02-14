import PropTypes from "prop-types";
import React, { memo, useCallback, useRef, useState } from "react";
import { Carousel } from "antd";

import { AppSwiperV2Wrapper } from "./style";

const AppSwiperV2 = memo((props) => {
  // state相关状态
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef();

  const {
    indicatorList,
    isHaveLeftDistance,
    isShowBannerControl,
    swiperHeight = 500,
    indicatorActiveColor = "fff",
    isHiddenControl = true,
  } = props;

  // ?处理轮播图左右按钮点击
  const handleControlClick = (isRight = true) => {
    isRight ? carouselRef.current.next() : carouselRef.current.prev();

    if (isRight) {
      let index = currentIndex;
      index++;

      if (index > indicatorList.length - 1) {
        index = 0;
      }

      setCurrentIndex(index);
    } else {
      let index = currentIndex;
      index--;

      if (index < 0) {
        index = indicatorList.length - 1;
      }

      setCurrentIndex(index);
    }
  };

  // ?处理指示器点击
  const handleIndicatorClick = (index) => {
    carouselRef.current.goTo(index);
    setCurrentIndex(index);
  };

  // ?处理自动轮播指示器索引变化
  const onCarouselChange = useCallback((current) => {
    setCurrentIndex(current);
  }, []);

  return (
    <AppSwiperV2Wrapper
      isHaveLeftDistance={isHaveLeftDistance}
      isShowBannerControl={isShowBannerControl}
      swiperHeight={swiperHeight}
      indicatorActiveColor={indicatorActiveColor}
      isHiddenControl={isHiddenControl}
    >
      <div className="carousel-wrap">
        <div className="control-wrap">
          <div className="left-arrow">
            <div
              className="control-left control"
              onClick={() => handleControlClick(false)}
            ></div>
          </div>
          <div className="right-arrow">
            <div
              className="control-right control"
              onClick={() => handleControlClick(true)}
            ></div>
          </div>
        </div>
        <Carousel
          autoplay
          effect="fade"
          dots={false}
          afterChange={onCarouselChange}
          ref={carouselRef}
        >
          {props.children}
        </Carousel>
      </div>
      <ul className="indicator-inner">
        {indicatorList?.map((item, index) => {
          return (
            <li
              key={index}
              className={
                currentIndex === index
                  ? "indicator-item active"
                  : "indicator-item"
              }
              onClick={() => handleIndicatorClick(index)}
            ></li>
          );
        })}
      </ul>
    </AppSwiperV2Wrapper>
  );
});

AppSwiperV2.propTypes = {
  indicatorList: PropTypes.array,
  isHaveLeftDistance: PropTypes.bool,
  swiperHeight: PropTypes.number,
  indicatorActiveColor: PropTypes.string,
  isHiddenControl: PropTypes.bool,
};

export default AppSwiperV2;
