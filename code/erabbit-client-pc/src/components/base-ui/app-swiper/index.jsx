import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";

import { AppSwiperWrapper } from "./style";

const AppSwiper = memo((props) => {
  // state相关状态
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(null);

  const { bannerData } = props;

  // ?获取轮播容器的元素引用
  const bannerInnerRef = useRef();

  // ?处理轮播图左右按钮点击
  const handleControlClick = (isRight = true) => {
    if (isRight) {
      nextFn();
    } else {
      prevFn();
    }
  };

  // ?处理轮播图item的点击
  const handleBannerItemClick = (data) => {
    console.log(data);
  };

  // ?处理指示器点击
  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    bannerInnerRef.current.style.left = -`${index * 1240}` + "px";
  };

  // ?定义一个开始轮播的方法
  function startPlayBanner() {
    let time=setInterval(() => {
      nextFn();
    }, 2000);

    setTimer(time)
  }

  // ?定义一个结束轮播的方法
  // function stopPlayBanner() {
  //   if (timer) return;
  //   clearInterval(timer);
  //   setTimer(null);
  // }

  // ?定义一个向前轮播的方法
  function prevFn() {
    let index = currentIndex;
    index--;

    if (index < 0) {
      index = bannerData.length - 1;
    }

    setCurrentIndex(index);
    bannerInnerRef.current.style.left = -`${index * 1240}` + "px";
  }

  // ?定义一个向后轮播的方法
  function nextFn() {
    let index = currentIndex;
    index++;

    if (index > bannerData.length - 1) {
      index = 0;
    }

    setCurrentIndex(index);
    bannerInnerRef.current.style.left = -`${index * 1240}` + "px";
  }

  // todo 开始轮播
  useEffect(() => {
    // startPlayBanner()  

    // return ()=>{
    //   clearInterval(timer)
    //   setTimer(null)
    // }
  }, [currentIndex]);

  return (
    <AppSwiperWrapper imgsLength={bannerData.length}>
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
      <div className="banner-outer">
        <ul className="banner-inner" ref={bannerInnerRef}>
          {bannerData?.map((item) => {
            return (
              <li
                key={item.id}
                className="banner-list-item"
                onClick={() => handleBannerItemClick(item)}
              >
                <img src={item.imgUrl} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="indicator-inner">
        {bannerData?.map((item, index) => {
          return (
            <li
              key={item.id}
              className={currentIndex===index?'indicator-item active':'indicator-item'}
              onClick={() => handleIndicatorClick(index)}
            ></li>
          );
        })}
      </ul>
    </AppSwiperWrapper>
  );
});

AppSwiper.propTypes = {
  bannerData: PropTypes.array,
};

export default AppSwiper;
