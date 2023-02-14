import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

import {
  getGoodsDetailData,
  getHotSellRecommend,
  getSameGoodsRecommend
} from "@/api/modules/detail";

export const fetchGoodsDetailData = createAsyncThunk('fetch/goodsDetail', (info, {
  dispatch
}) => {
  getGoodsDetailData(info.id).then(res => {
    dispatch(changeGoodsDetailInfoAction(res.result))
  })

  getSameGoodsRecommend(info.id).then(res => {
    const result = res.result

    const dealArr = []
    for (let i = 0; i < 4; i++) {
      dealArr[i] = result.slice(i * 4, (i + 1) * 4)
    }

    dispatch(changeSameGoodsRecommendAction(dealArr))
  })

  getHotSellRecommend(info.id, 3, 1).then(res => {
    dispatch(changeHotDayRankRecommendAction(res.result))
  })

  getHotSellRecommend(info.id, 3, 2).then(res => {
    dispatch(changeHotWeekRankRecommendAction(res.result))
  })
})

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    goodsDetailInfo: {},
    sameGoodsRecommend: [],
    hotDayRankRecommend: [],
    hotWeekRankRecommend: []
  },
  reducers: {
    changeGoodsDetailInfoAction(state, {
      payload
    }) {
      state.goodsDetailInfo = payload
    },
    changeSameGoodsRecommendAction(state, {
      payload
    }) {
      state.sameGoodsRecommend = payload
    },
    changeHotDayRankRecommendAction(state, {
      payload
    }) {
      state.hotDayRankRecommend = payload
    },
    changeHotWeekRankRecommendAction(state, {
      payload
    }) {
      state.hotWeekRankRecommend = payload
    }
  }
})

export const {
  changeGoodsDetailInfoAction,
  changeSameGoodsRecommendAction,
  changeHotDayRankRecommendAction,
  changeHotWeekRankRecommendAction
} = detailSlice.actions

export default detailSlice.reducer