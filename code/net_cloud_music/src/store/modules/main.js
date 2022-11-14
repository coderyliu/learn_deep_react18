import {
  createSlice
} from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    token: '',
    isShowLogin: false
  },
  reducers: {
    changeTokenAction(state, {
      payload
    }) {
      state.token = payload
    },
    changeIsShowLoginAction(state, {
      payload
    }) {
      state.isShowLogin = payload
    }
  }
})

export const {
  changeTokenAction,
  changeIsShowLoginAction
} = mainSlice.actions

export default mainSlice.reducer