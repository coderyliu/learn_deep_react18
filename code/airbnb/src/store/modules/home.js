import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'

import {
  getHomeGoodPriceInfoData
} from '@/network/modules/home'

export const fetchHomeGoodPriceInfo = createAsyncThunk('fetchHomeData', async (payload, {
  dispatch
}) => {
  const goodPriceInfo = await getHomeGoodPriceInfoData()
  dispatch(changeGoodPriceInfoAction(goodPriceInfo))

  // return res
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, {
      payload
    }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: {
    // [fetchHomeGoodPriceInfo.fulfilled](state,{payload}){
    //   state.goodPriceInfo=payload
    // }
  }
})

export const {
  changeGoodPriceInfoAction
} = homeSlice.actions

export default homeSlice.reducer