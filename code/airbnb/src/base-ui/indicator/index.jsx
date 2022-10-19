import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";

import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { sliderIndex = 0 } = props;
  const contentRef = useRef();

  // 指示器轮播逻辑
  useEffect(() => {
    // 1.拿到索引元素
    const sliderEl = contentRef.current.children[sliderIndex];
    const itemOffsetLeft = sliderEl.offsetLeft;
    const itemClientWidth = sliderEl.clientWidth;

    // 2.拿到父元素可scroll的宽度和可视区域的宽度
    const scrollWidth = contentRef.current.scrollWidth;
    const contentWidth = contentRef.current.clientWidth;

    // 3.移动到中间的计算公式
    let distance = itemOffsetLeft + itemClientWidth * 0.5 - contentWidth * 0.5;

    // 4.处理边界
    if (distance < 0) distance = 0; //左边不移动情况
    const totalDistance = scrollWidth - contentWidth;
    if (totalDistance < distance) distance = totalDistance; //右边不移动情况

    // 5.设置动画
    contentRef.current.style.transform = `translate(-${distance}px)`;
  }, [sliderIndex]);

  return (
    <IndicatorWrapper>
      <div className="indicator-con" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  sliderIndex:PropTypes.number
};

export default Indicator;
