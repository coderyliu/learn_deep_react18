import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import IconCloseBtn from "@/assets/svg/icon-close-btn";
import IconLeftArrow from "@/assets/svg/icon-left-arrow";
import IconRightArrow from "@/assets/svg/icon-right-arrow";
import Indicator from "../indicator";
import IconTriangleArrowBottom from "@/assets/svg/icon-triangle-arrow-bottom";
import IconTriangleArrowTop from "@/assets/svg/icon-triangle-arrow-top";
import { PictureBrowserWrapper } from "./style";

const PictureBrowser = memo((props) => {
  // 从props中拿到数据
  const { pictureUrls, closeClick, startIndex } = props;

  // 当前要展示的图片索引
  const [sliderIndex, setSliderIndex] = useState(startIndex);
  const [showList, setShowList] = useState(true);

  // 关闭图片浏览器
  function handleBtnCloseClick() {
    if (closeClick) closeClick();
  }

  // 图片切换
  function handleBtnToggleClick(e, isNext = true) {
    e.stopPropagation()

    let newIndex = isNext ? sliderIndex + 1 : sliderIndex - 1;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex > pictureUrls.length - 1) newIndex = 0;
    setSliderIndex(newIndex);
  }

  // 下方指示器的切换
  function handleIndicatorClick(e, index) {
    setSliderIndex(index);
  }

  // 副作用
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <PictureBrowserWrapper showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={handleBtnCloseClick}>
          <IconCloseBtn></IconCloseBtn>
        </div>
      </div>
      <div className="slider-browser">
        <div className="control">
          <div
            className="btn left"
            onClick={(e) => handleBtnToggleClick(e, false)}
          >
            <IconLeftArrow width={77} height={77}></IconLeftArrow>
          </div>
          <div
            className="btn right"
            onClick={(e) => handleBtnToggleClick(e, true)}
          >
            <IconRightArrow width={77} height={77}></IconRightArrow>
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrls[sliderIndex]}
              timeout={200}
              classNames="pic"
              mountOnEnter={true}
            >
              <img src={pictureUrls[sliderIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {sliderIndex + 1}/{pictureUrls.length}:
              </span>
              <span>room apartment图片{sliderIndex + 1}</span>
            </div>
            <div className="toggle" onClick={(e) => setShowList(!showList)}>
              <span>{showList ? "隐藏" : "显示"}图片列表</span>
              {showList ? (
                <IconTriangleArrowBottom></IconTriangleArrowBottom>
              ) : (
                <IconTriangleArrowTop></IconTriangleArrowTop>
              )}
            </div>
          </div>
          {showList && (
            <div className="indicator">
              {
                <Indicator sliderIndex={sliderIndex}>
                  {pictureUrls.map((item, index) => {
                    return (
                      <div
                        key={item}
                        className={
                          sliderIndex === index ? "item active" : "item"
                        }
                        onClick={(e) => handleIndicatorClick(e, index)}
                      >
                        <img src={item} alt="" />
                      </div>
                    );
                  })}
                </Indicator>
              }
            </div>
          )}
        </div>
      </div>
    </PictureBrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func,
};

export default PictureBrowser;
