import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'

import {
  getHomeDiscountData,
  getHomeGoodPriceInfoData,
  getHomeHighScoreInfoData,
  getHomeHotRecommendData,
  getHomeLongForData,
  getHomePlusData
} from '@/network/modules/home'

export const fetchHomeData = createAsyncThunk('fetchHomeData', (payload, {
  dispatch
}) => {
  // 这里就不用async/await了，同步执行，影响拿到服务器的数据，阻塞渲染
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })

  getHomeGoodPriceInfoData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })

  getHomeHighScoreInfoData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })

  getHomeHotRecommendData().then(res => {
    dispatch(changeHotRecommendAction(res))
  })

  getHomeLongForData().then(res => {
    dispatch(changeLongForInfoAction(res))
  })

  getHomePlusData().then(res => {
    dispatch(changePlusInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    discountInfo: {},
    goodPriceInfo: {},
    highScoreInfo: {},
    recommendInfo: {},
    longForInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeDiscountInfoAction(state, {
      payload
    }) {
      state.discountInfo = payload
    },
    changeGoodPriceInfoAction(state, {
      payload
    }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, {
      payload
    }) {
      state.highScoreInfo = payload
    },
    changeHotRecommendAction(state, {
      payload
    }) {
      state.recommendInfo = payload
    },
    changeLongForInfoAction(state, {
      payload
    }) {
      state.longForInfo = payload
    },
    changePlusInfoAction(state, {
      payload
    }) {
      state.plusInfo = payload
    }
  },
  extraReducers: {
    // [fetchHomeGoodPriceInfo.fulfilled](state,{payload}){
    //   state.goodPriceInfo=payload
    // }
  }
})

export const {
  changeDiscountInfoAction,
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeHotRecommendAction,
  changeLongForInfoAction,
  changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer