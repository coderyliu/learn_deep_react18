import * as actionTypes from './constants'
import axios from 'axios'

export const changeBannersAction=banners=>({
  type:actionTypes.CHANGE_BANNERS,
  banners
})

export const changeRecommendsAction=recommends=>({
  type:actionTypes.CHANGE_RECOMMENDS,
  recommends
})

export const fetchHomeMulitdata=()=>{
  // dispatch函数，函数会自动执行
  function handleHomeData(dispatch,getState){
    // 异步请求
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const bannerLists = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;

      dispatch(changeBannersAction(bannerLists))
      dispatch(changeRecommendsAction(recommends))
    });
  }

  return handleHomeData
}