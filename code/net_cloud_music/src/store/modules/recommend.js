import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'

import {
  getTopBanner
} from '../../services/modules/discover/recommend'

export const fetchRecommendData = createAsyncThunk('recommend',async (info, {
  dispatch
}) => {
  getTopBanner().then(res => {
    dispatch(changeTopBannerAction(res.banners))
  })
})

const recommendSlice = createSlice({
  name: "recommend",
  initialState: {
    topBanner: []
  },
  reducers: {
    changeTopBannerAction(state, {payload}) {
      state.topBanner = payload
    }
  }
})

export const {
  changeTopBannerAction
} = recommendSlice.actions

export default recommendSlice.reducer