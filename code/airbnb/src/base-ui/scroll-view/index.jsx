import React, { memo, useEffect, useState, useRef } from "react";

import IconLeftArrow from "@/assets/svg/icon-left-arrow";
import IconRightArrow from "@/assets/svg/icon-right-arrow";
import { ScrollViewWrapper } from "./style";

const ScrollView = memo((props) => {
  // 组件内部的状态
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef();

  // 组件内部的逻辑
  const scrollControlRef = useRef();
  useEffect(() => {
    const totalScrollWidth = scrollControlRef.current.scrollWidth; //一共可以滚动的区域
    const clientWidth = scrollControlRef.current.clientWidth; //元素本身的可视区域的宽度
    const totalDistance = totalScrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;

    // 是否显示右侧滚动按钮
    setShowRight(totalDistanceRef.current > 0);
  }, [props.children]);

  // 事件监听
  function handleControlClick(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollControlRef.current.children[newIndex];
    const newOffsetLeft = newEl.offsetLeft;
    scrollControlRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
    setPosIndex(newIndex);

    // 是否展示左侧右侧滚动按钮
    setShowLeft(newOffsetLeft > 0);
    setShowRight(totalDistanceRef.current > newOffsetLeft);
  }

  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div
          className="control left"
          onClick={(e) => handleControlClick(false)}
        >
          <IconLeftArrow></IconLeftArrow>
        </div>
      )}
      {showRight && (
        <div
          className="control right"
          onClick={(e) => handleControlClick(true)}
        >
          <IconRightArrow></IconRightArrow>
        </div>
      )}
      <div className="scroll">
        <div className="scroll-control" ref={scrollControlRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

export default ScrollView;
