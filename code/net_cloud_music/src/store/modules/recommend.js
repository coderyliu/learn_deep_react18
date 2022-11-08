import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'

import {
  getArtistData,
  getHotRecommend,
  getNewDisk,
  getPopularDJ,
  getRankingData,
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

  getRankingData(19723756).then(res => {
    dispatch(changeTopUpListAction(res.playlist))
  })

  getRankingData(3779629).then(res => {
    dispatch(changeTopHotListAction(res.playlist))
  })

  getRankingData(2884035).then(res => {
    dispatch(changeTopOriginListAction(res.playlist))
  })

  getArtistData().then(res => {
    dispatch(changeArtistAction(res.artists))
  })

  getPopularDJ().then(res => {
    dispatch(changePopularDJAction(res.data.list))
  })
})

const recommendSlice = createSlice({
  name: "recommend",
  initialState: {
    topBanner: [],
    hotRecommend: [],
    newDisk: [],
    topUpList: {},
    topHotList: {},
    topOriginList: {},
    artist: [],
    popularDJ: []
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
    },
    changeTopUpListAction(state, {
      payload
    }) {
      state.topUpList = payload
    },
    changeTopHotListAction(state, {
      payload
    }) {
      state.topHotList = payload
    },
    changeTopOriginListAction(state, {
      payload
    }) {
      state.topOriginList = payload
    },
    changeArtistAction(state, {
      payload
    }) {
      state.artist = payload
    },
    changePopularDJAction(state, {
      payload
    }) {
      state.popularDJ = payload
    }
  }
})

export const {
  changeTopBannerAction,
  changeHotRecommendAction,
  changeNewDiskAction,
  changeTopUpListAction,
  changeTopHotListAction,
  changeTopOriginListAction,
  changeArtistAction,
  changePopularDJAction
} = recommendSlice.actions

export default recommendSlice.reducer