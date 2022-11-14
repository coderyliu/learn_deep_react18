import {
  createSlice
} from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    token: '',
    isShowLogin: false,
    userInfo: {}
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
    },
    changeUserInfoAction(state, {
      payload
    }) {
      state.userInfo = payload
    }
  }
})

export const {
  changeTokenAction,
  changeIsShowLoginAction,
  changeUserInfoAction
} = mainSlice.actions

export default mainSlice.reducer