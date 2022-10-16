import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchHomeGoodPriceInfo } from "@/store/modules/home";

import HomeBanner from "./c-cpns/home-banner";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import { HomeWrapper } from "./style";

const Home = memo(() => {
  // redux Hook
  const { goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
  }),shallowEqual);
  const dispatch = useDispatch();

  // 副作用
  useEffect(() => {
    dispatch(fetchHomeGoodPriceInfo());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content-wrap">
        <div className="good-price-wrap">
          <SectionHeader title={goodPriceInfo?.title}></SectionHeader>
          <SectionRooms roomList={goodPriceInfo?.list}></SectionRooms>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
