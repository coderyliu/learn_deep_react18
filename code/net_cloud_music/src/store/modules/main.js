import {
  createSlice
} from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    token: ''
  },
  reducers: {
    changeTokenAction(state, {
      payload
    }) {
      state.token = payload
    }
  }
})

export const {
  changeTokenAction
} = mainSlice.actions

export default mainSlice.reducer