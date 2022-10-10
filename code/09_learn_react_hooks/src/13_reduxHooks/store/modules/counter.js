import {
  createSlice
} from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    addNumber(state, {
      payload
    }) {
      state.count = state.count + payload
    },
    subNumber(state, {
      payload
    }) {
      state.count = state.count - payload
    }
  }
})

export const {
  addNumber,
  subNumber
} = counterSlice.actions
export default counterSlice.reducer