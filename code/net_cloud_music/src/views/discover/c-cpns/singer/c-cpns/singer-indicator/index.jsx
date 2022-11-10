import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { indicatorZi } from "@/assets/data/singer-indicator";
import { fetchSingerData } from "@/store/modules/singer";

import { SingerIndicatorWrapper } from "./style";

const SingerIndicator = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { area, type } = useSelector(
    (state) => ({
      area: state.singer.currentArea,
      type: state.singer.currentType,
    }),
    shallowEqual
  );
  // 处理指示器的点击
  const dispatch = useDispatch();
  function handleIndicatorZiClick(item, index) {
    setCurrentIndex(index);
    // 发起网络请求
    let initial;
    if (item === "热门") {
      initial = -1;
    } else if (item === "其它") {
      initial = 0;
    } else {
      initial = item.toLowerCase();
    }

    dispatch(fetchSingerData({ area, type, initial }));
  }

  // 指示器的小细节
  useEffect(() => {
    setCurrentIndex(0);
  }, [area, type]);

  return (
    <SingerIndicatorWrapper>
      <ul className="indicator-wrap">
        {indicatorZi.map((item, index) => {
          return (
            <li
              className={currentIndex === index ? "item active" : "item"}
              key={item}
              onClick={() => {
                handleIndicatorZiClick(item, index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </SingerIndicatorWrapper>
  );
});

export default SingerIndicator;
