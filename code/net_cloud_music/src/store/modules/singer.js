import {
  getSingerCategoryList
} from "@/services/modules/discover/singer";
import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

export const fetchSingerData = createAsyncThunk('fetch/singerData', (info, {
  dispatch
}) => {
  getSingerCategoryList(info.area, info.type, info.initial).then(res => {
    dispatch(changeCategoryListAction(res.artists))
  })
})

const singerSlice = createSlice({
  name: 'singer',
  initialState: {
    categoryList: [],
    currentArea: -1,
    currentType: -1,
    currentTitle: '推荐歌手'
  },
  reducers: {
    changeCategoryListAction(state, {
      payload
    }) {
      state.categoryList = payload
    },
    changeParamsAction(state, {
      payload
    }) {
      state.currentArea = payload.area
      state.currentType = payload.type
      state.currentTitle = payload.title
    }
  }
})

export const {
  changeCategoryListAction,
  changeParamsAction
} = singerSlice.actions

export default singerSlice.reducer