import {
  getDjRadioCatelist
} from "@/services/modules/discover/radio";
import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";

export const fetchRadioData = createAsyncThunk('fetch/radio', (info, {
  dispatch
}) => {
  getDjRadioCatelist().then(res => {
    dispatch(changeCategoryListAction(res.categories))
  })
})

const radioSlice = createSlice({
  name: 'radio',
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
} = radioSlice.actions

export default radioSlice.reducer