import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchRecommendData } from '@/store/modules/recommend'

import RecommendBanner from './c-cpns/recom-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewDisk from './c-cpns/new-disk'
import { RecommendWrapper } from './style'

const Recommend = memo((props) => {
  // redux相关
  const { topBanner,hotRecommend } = useSelector(
    (state) => ({
      topBanner: state.recommend.topBanner,
      hotRecommend:state.recommend.hotRecommend
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecommendData("coderyliu"));
  }, [dispatch]);

  return (
    <RecommendWrapper>
      <RecommendBanner banners={topBanner}></RecommendBanner>
      <div className="content-wrapper">
        <HotRecommend hotRecommend={hotRecommend}></HotRecommend>
        <NewDisk></NewDisk>
      </div>
    </RecommendWrapper>
  );
})

export default Recommend