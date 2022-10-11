import { createSlice } from '@reduxjs/toolkit'

const homeSlice=createSlice({
  name:'home',
  initialState:{
    productList:[]
  },
  reducers:{
    changeProductListAction(state,{payload}){}
  }
})

export default homeSlice.reducer