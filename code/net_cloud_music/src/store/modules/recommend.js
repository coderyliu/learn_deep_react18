import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'

import {
  getHotRecommend,
  getNewDisk,
  getTopBanner
} from '../../services/modules/discover/recommend'

export const fetchRecommendData = createAsyncThunk('recommend', async (info, {
  dispatch
}) => {
  getTopBanner().then(res => {
    dispatch(changeTopBannerAction(res.banners))
  })

  getHotRecommend().then(res => {
    dispatch(changeHotRecommendAction(res.result))
  })

  getNewDisk().then(res => {
    dispatch(changeNewDiskAction(res.albums))
  })
})

const recommendSlice = createSlice({
  name: "recommend",
  initialState: {
    topBanner: [],
    hotRecommend: [],
    newDisk: []
  },
  reducers: {
    changeTopBannerAction(state, {
      payload
    }) {
      state.topBanner = payload
    },
    changeHotRecommendAction(state, {
      payload
    }) {
      state.hotRecommend = payload
    },
    changeNewDiskAction(state, {
      payload
    }) {
      state.newDisk = payload
    }
  }
})

export const {
  changeTopBannerAction,
  changeHotRecommendAction,
  changeNewDiskAction
} = recommendSlice.actions

export default recommendSlice.reducer