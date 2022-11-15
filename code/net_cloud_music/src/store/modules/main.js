import {
  createSlice
} from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    token: '',
    isShowLogin: false,
    isShowVipModal: false,
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
    },
    changeIsShowVipAction(state, {
      payload
    }) {
      state.isShowVipModal = payload
    }
  }
})

export const {
  changeTokenAction,
  changeIsShowLoginAction,
  changeIsShowVipAction,
  changeUserInfoAction
} = mainSlice.actions

export default mainSlice.reducer