import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

import {
  getFirstCategoryData
} from "@/api/modules/category";

export const fetchCategoryData = createAsyncThunk('fetch/categoryData', (info, {
  dispatch
}) => {
  getFirstCategoryData(info.id).then(res => {
    dispatch(changeFirstCateInfoAction(res.result))
  })
})

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    firstCateInfo: {}
  },
  reducers: {
    changeFirstCateInfoAction(state, {
      payload
    }) {
      state.firstCateInfo = payload
    }
  }
})

export const {
  changeFirstCateInfoAction
} = categorySlice.actions

export default categorySlice.reducer