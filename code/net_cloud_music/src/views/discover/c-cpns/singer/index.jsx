import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchSingerData } from "@/store/modules/singer";

import SingerCategory from "./c-cpns/singer-category";
import SingerSectionItemV1 from "./c-cpns/section-item-v1";
import SingerSectionItemV2 from "./c-cpns/section-item-v2";
import { SingerWrapper } from "./style";

const Singer = memo((props) => {
  // redux相关
  const { categoryList, currentTitle, currentArea } = useSelector(
    (state) => ({
      categoryList: state.singer.categoryList,
      currentTitle: state.singer.currentTitle,
      currentArea: state.singer.currentArea,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingerData({ area: -1, type: 1 }));
  }, [dispatch]);

  // 元素返回逻辑
  let currElement;
  if (currentTitle === "推荐歌手" || currentTitle === "入驻歌手") {
    currElement = (
      <SingerSectionItemV2
        itemList={categoryList}
        title={currentTitle}
      ></SingerSectionItemV2>
    );
  } else {
    currElement = (
      <SingerSectionItemV1
        itemList={categoryList}
        title={currentTitle}
      ></SingerSectionItemV1>
    );
  }

  return (
    <SingerWrapper>
      <div className="singer-wrapper">
        <div className="cont-left">
          <SingerCategory
            currentTitle={currentTitle}
            area={currentArea}
          ></SingerCategory>
        </div>
        <div className="cont-right">{currElement}</div>
      </div>
    </SingerWrapper>
  );
});

export default Singer;
