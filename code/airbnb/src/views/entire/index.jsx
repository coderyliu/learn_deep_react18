import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchEntireData } from "@/store/modules/entire/actionCreators";

import EntireFilter from "./c-cpns/entire-filter";
import EntireRoom from "./c-cpns/entire-rooms";
import EntirePagination from "./c-cpns/entire-pagination";
import { EntireWrapper } from "./style";

const Entire = memo(() => {
  // 网络请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntireData());
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      <EntireRoom></EntireRoom>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  );
});

export default Entire;
