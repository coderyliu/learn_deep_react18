import {
  createSlice
} from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    headerInfo: {
      isFixed: false,
      topAlpha: false
    }
  },
  reducers: {
    changeHeaderInfoFixedAction(state, {
      payload
    }) {
      state.headerInfo = payload
    }
  }
})

export const {
  changeHeaderInfoFixedAction
} = mainSlice.actions

export default mainSlice.reducer