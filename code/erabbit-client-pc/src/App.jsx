import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchHomeData } from "./store/modules/home";

const App = memo(() => {
  const { newFreshData } = useSelector(
    (state) => ({
      newFreshData: state.home.newFreshData,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeData());
  },[dispatch]);

  return <div>APP Page</div>;
});

export default App;
