import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

import {
  getAddressMV,
  getMVDetailData,
  getMvLikeCount,
  getRecommendMv
} from "@/services/modules/mv";

export const fetchMVData = createAsyncThunk('fetch/mvData', (info, {
  dispatch
}) => {
  getAddressMV(info.id).then(res => {
    dispatch(changeAddressAction(res.data.url))
  })

  getMVDetailData(info.id).then(res => {
    dispatch(changeMVDetailInfoAction(res.data))
  })

  getRecommendMv().then(res => {
    dispatch(changeMVRecommendDataAction(res.result))
  })

  getMvLikeCount(info.id).then(res => {
    dispatch(changeCountInfoAction(res))
  })
})

const mvSlice = createSlice({
  name: 'mv',
  initialState: {
    address: '',
    mvDetailInfo: {},
    mvRecommendData: [],
    countInfo: {}
  },
  reducers: {
    changeAddressAction(state, {
      payload
    }) {
      state.address = payload
    },
    changeMVDetailInfoAction(state, {
      payload
    }) {
      state.mvDetailInfo = payload
    },
    changeMVRecommendDataAction(state, {
      payload
    }) {
      state.mvRecommendData = payload
    },
    changeCountInfoAction(state, {
      payload
    }) {
      state.countInfo = payload
    }
  }
})

export const {
  changeAddressAction,
  changeMVDetailInfoAction,
  changeMVRecommendDataAction,
  changeCountInfoAction
} = mvSlice.actions

export default mvSlice.reducer