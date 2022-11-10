import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchSingerData } from "@/store/modules/singer";

import SingerCategory from "./c-cpns/singer-category";
import SingerSectionItemV1 from "./c-cpns/section-item-v1";
import { SingerWrapper } from "./style";

const Singer = memo((props) => {
  // redux相关
  const { categoryList } = useSelector(
    (state) => ({
      categoryList: state.singer.categoryList,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingerData({ area: -1, type: -1 }));
  }, [dispatch]);

  return (
    <SingerWrapper>
      <div className="singer-wrapper">
        <div className="cont-left">
          <SingerCategory></SingerCategory>
        </div>
        <div className="cont-right">
          <SingerSectionItemV1 itemList={categoryList}></SingerSectionItemV1>
        </div>
      </div>
    </SingerWrapper>
  );
});

export default Singer;
