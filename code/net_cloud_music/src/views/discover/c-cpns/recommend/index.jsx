import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchRecommendData } from '@/store/modules/recommend'

import { RecommendWrapper } from './style'

const Recommend = memo((props) => {
  // redux相关
  const { topBanner } = useSelector(
    (state) => ({
      topBanner: state.recommend.topBanner,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecommendData("coderyliu"));
  }, [dispatch]);

  return (
    <RecommendWrapper>
      <div>recommend</div>
    </RecommendWrapper>
  );
})

Recommend.propTypes = {}

export default Recommend