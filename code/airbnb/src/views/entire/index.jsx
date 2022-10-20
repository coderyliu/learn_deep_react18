import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchEntireData } from "@/store/modules/entire/actionCreators";

import EntireFilter from "./c-cpns/entire-filter";
import EntireRoom from "./c-cpns/entire-rooms";
import EntirePagination from "./c-cpns/entire-pagination";
import { EntireWrapper } from "./style";
import { changeHeaderInfoFixedAction } from "@/store/modules/main";
import AppHeader from "@/components/app-header";

const Entire = memo(() => {
  const { headerInfo } = useSelector(
    (state) => ({
      headerInfo: state.main.headerInfo,
    }),
    shallowEqual
  );

  // 网络请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntireData());
    dispatch(changeHeaderInfoFixedAction({ isFixed: true, topAlpha: false }));
  }, [dispatch]);

  return (
    <EntireWrapper>
      <AppHeader isFixed={headerInfo.isFixed}></AppHeader>
      <EntireFilter></EntireFilter>
      <EntireRoom></EntireRoom>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  );
});

export default Entire;
