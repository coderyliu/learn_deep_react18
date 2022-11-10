import React, { memo } from "react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchRadioData } from "@/store/modules/radio";

import { RadioStationWrapper } from "./style";

const RadioStation = memo((props) => {
  // redux相关
  const { categoryList } = useSelector(
    (state) => ({
      categoryList: state.radio.categoryList,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRadioData());
  }, [dispatch]);

  return (
    <RadioStationWrapper>
      <h2>radio station wrapper</h2>
    </RadioStationWrapper>
  );
});

export default RadioStation;
