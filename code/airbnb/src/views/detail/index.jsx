import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { changeHeaderInfoFixedAction } from "@/store/modules/main";

import AppHeader from "@/components/app-header";
import DetailInfos from "./c-cpns/detail-infos";
import DetailPictures from "./c-cpns/detail-pictures";
import { DetailWrapper } from "./style";

const Detail = memo(() => {
  const { headerInfo } = useSelector(
    (state) => ({
      headerInfo: state.main.headerInfo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderInfoFixedAction({ isFixed: false, topAlpha: false }));
  }, [dispatch]);

  return (
    <DetailWrapper>
      <AppHeader isFixed={headerInfo.isFixed}></AppHeader>
      <DetailPictures></DetailPictures>
      <DetailInfos></DetailInfos>
    </DetailWrapper>
  );
});

export default Detail;
