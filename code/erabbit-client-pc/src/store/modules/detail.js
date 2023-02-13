import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

import {
  getGoodsDetailData
} from "@/api/modules/detail";

export const fetchGoodsDetailData = createAsyncThunk('fetch/goodsDetail', (info, {
  dispatch
}) => {
  getGoodsDetailData(info.id).then(res => {
    dispatch(changeGoodsDetailInfoAction(res.result))
  })
})

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    goodsDetailInfo: {}
  },
  reducers: {
    changeGoodsDetailInfoAction(state, {
      payload
    }) {
      state.goodsDetailInfo = payload
    }
  }
})

export const {
  changeGoodsDetailInfoAction
} = detailSlice.actions

export default detailSlice.reducer