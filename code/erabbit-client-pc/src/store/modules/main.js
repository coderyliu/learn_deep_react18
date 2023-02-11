import {
  createSlice
} from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: "main",
  initialState: {
    isFixedHeader: false
  },
  reducers: {
    changeIsFixedHeaderAction(state, {
      payload
    }) {
      state.isFixedHeader = payload
    }
  }
})

export const {
  changeIsFixedHeaderAction
} = mainSlice.actions

export default mainSlice.reducer