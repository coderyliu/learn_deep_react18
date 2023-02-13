import {
  createSlice
} from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: "main",
  initialState: {
    isFixedHeader: false,
    isLogin: true,
    userInfo: {}
  },
  reducers: {
    changeIsFixedHeaderAction(state, {
      payload
    }) {
      state.isFixedHeader = payload
    },
    changeIsLoginAction(state, {
      payload
    }) {
      state.isLogin = payload
    },
    changeUserInfoAction(state, {
      payload
    }) {
      state.userInfo = payload
    }
  }
})

export const {
  changeIsFixedHeaderAction,
  changeIsLoginAction,
  changeUserInfoAction
} = mainSlice.actions

export default mainSlice.reducer