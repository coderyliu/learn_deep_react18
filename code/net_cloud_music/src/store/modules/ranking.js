import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'

import {
  getRankingDetail,
  getRankingInfo
} from '@/services/modules/discover/ranking'

export const fetchRankingData = createAsyncThunk('fetch/ranking', (id, {
  dispatch
}) => {
  getRankingInfo().then(res => {
    dispatch(changeRankingInfoAction(res.list))
  })

  getRankingDetail(id).then(res => {
    dispatch(changeRankingDetailAction(res.playlist))
  })
})

const rankingSlice = createSlice({
  name: 'ranking',
  initialState: {
    rankingInfo: [],
    rankingDetail: []
  },
  reducers: {
    changeRankingInfoAction(state, {
      payload
    }) {
      state.rankingInfo = payload
    },
    changeRankingDetailAction(state, {
      payload
    }) {
      state.rankingDetail = payload
    },
  }
})

export const {
  changeRankingInfoAction,
  changeRankingDetailAction
} = rankingSlice.actions

export default rankingSlice.reducer