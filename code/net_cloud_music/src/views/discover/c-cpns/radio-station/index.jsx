import React, { memo } from "react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchRadioData } from "@/store/modules/radio";

import CategorySlider from "./c-cpns/category-slider";
import SectionItemV1 from "./c-cpns/section-item-v1";
import SectionItemV2 from "./c-cpns/section-item-v2";
import { RadioStationWrapper } from "./style";

const RadioStation = memo((props) => {
  // redux相关
  const { categoryList, hotRadioData, totalCount, excellentData } = useSelector(
    (state) => ({
      categoryList: state.radio.categoryList,
      hotRadioData: state.radio.hotRadioData,
      totalCount: state.radio.totalCount,
      excellentData: state.radio.excellentData,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchRadioData({
        id: 3,
        isGetCate: true,
        offset: 0,
        isGetExcellent: true,
      })
    );
  }, [dispatch]);

  return (
    <RadioStationWrapper>
      <div className="radio-wrapper">
        <CategorySlider categories={categoryList}></CategorySlider>
        <SectionItemV1 listData={excellentData}></SectionItemV1>
        <SectionItemV2
          count={totalCount}
          listData={hotRadioData}
        ></SectionItemV2>
      </div>
    </RadioStationWrapper>
  );
});

export default RadioStation;
