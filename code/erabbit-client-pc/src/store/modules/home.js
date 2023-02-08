import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

import { getHomeNewFreshData } from "@/api/modules/home";

export const fetchHomeData = createAsyncThunk('fetch/homeData', (info, {
  dispatch
}) => {
  getHomeNewFreshData().then(res=>{
    dispatch(changeNewFreshDataAction(res.result))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    newFreshData: []
  },
  reducers: {
    changeNewFreshDataAction(state, {
      payload
    }) {
      console.log(payload)
      state.newFreshData = payload
    }
  }
})

export const {
  changeNewFreshDataAction
} = homeSlice.actions

export default homeSlice.reducer