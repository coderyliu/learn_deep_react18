import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

import {
  getHomeNewFreshData,
  getHomeHotRecommend,
  getHomeHotBrand,
  getHomeGoodsField,
  getHomeNewSpecial,
  getHomeBanner
} from "@/api/modules/home";

export const fetchHomeData = createAsyncThunk('fetch/homeData', (info, {
  dispatch
}) => {
  getHomeNewFreshData().then(res => {
    dispatch(changeNewFreshDataAction(res.result))
  })

  getHomeHotRecommend().then(res => {
    dispatch(changeHotRecommendDataAction(res.result))
  })

  getHomeHotBrand().then(res => {
    dispatch(changeHotBrandDataAction(res.result))
  })

  getHomeGoodsField().then(res => {
    dispatch(changeHomeGoodsInfoAction(res.result))
  })

  getHomeNewSpecial().then(res => {
    dispatch(changeNewSpecialDataAction(res.result))
  })
})

export const fetchBannerData = createAsyncThunk('fetch/bannerData', (info, {
  dispatch
}) => {
  getHomeBanner().then(res => {
    dispatch(changeHomeBannerAction(res.result))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    homeBanner: [],
    newFreshData: [],
    hotRecommendData: [],
    hotBrandData: [],
    goodsHomeInfo: {},
    goodsFoodInfo: {},
    goodsClothesInfo: {},
    goodsChildInfo: {},
    newSpecialData: []
  },
  reducers: {
    changeHomeBannerAction(state, {
      payload
    }) {
      state.homeBanner = payload
    },
    changeNewFreshDataAction(state, {
      payload
    }) {
      state.newFreshData = payload
    },
    changeHotRecommendDataAction(state, {
      payload
    }) {
      state.hotRecommendData = payload
    },
    changeHotBrandDataAction(state, {
      payload
    }) {
      state.hotBrandData = payload
    },
    changeHomeGoodsInfoAction(state, {
      payload
    }) {
      if (!Array.isArray(payload)) return

      for (let item of payload) {
        switch (item.name) {
          case '居家':
            state.goodsHomeInfo = item
            break;
          case '美食':
            state.goodsFoodInfo = item
            break;
          case '服饰':
            state.goodsClothesInfo = item
            break;
          case '母婴':
            state.goodsChildInfo = item
            break;
          default:
            break;
        }
      }
    },
    changeNewSpecialDataAction(state, {
      payload
    }) {
      state.newSpecialData = payload
    }
  }
})

export const {
  changeNewFreshDataAction,
  changeHotRecommendDataAction,
  changeHotBrandDataAction,
  changeHomeGoodsInfoAction,
  changeNewSpecialDataAction,
  changeHomeBannerAction
} = homeSlice.actions

export default homeSlice.reducer