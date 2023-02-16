import {
  createSlice
} from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: "main",
  initialState: {
    isFixedHeader: false,
    isLogin: true,
    userInfo: {},
    currentCate: {},
    currentSubCate: {},
    currentGoods: {}
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
    },
    changeCurrentCateAction(state, {
      payload
    }) {
      state.currentCate = payload
    },
    changeCurrentSubCateAction(state, {
      payload
    }) {
      state.currentSubCate = payload
    },
    changeCurrentGoodsAction(state, {
      payload
    }) {
      state.currentGoods = payload
    }
  }
})

export const {
  changeIsFixedHeaderAction,
  changeIsLoginAction,
  changeUserInfoAction,
  changeCurrentCateAction,
  changeCurrentSubCateAction,
  changeCurrentGoodsAction
} = mainSlice.actions

export default mainSlice.reducer