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
  getSingerCategoryList(info.area, info.type).then(res => {
    dispatch(changeCategoryListAction(res.artists))
  })
})

const singerSlice = createSlice({
  name: 'singer',
  initialState: {
    categoryList: []
  },
  reducers: {
    changeCategoryListAction(state, {
      payload
    }) {
      state.categoryList = payload
    }
  }
})

export const {
  changeCategoryListAction
} = singerSlice.actions

export default singerSlice.reducer