import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ?createAsyncThunk()是@reduxjs/toolkit给我们用户实现异步请求任务的函数，写在createSlice()函数的reducers里的reducer是同步执行的
// 接受第一个参数为一个type类型,第二个参数为一个函数，这个函数会自动执行在dispatch的时候
// 第二个函数也接受两个参数：第一个参数是在dispatch的时候传过来的，第二个参数是一个store对象，可以在这里面dispatch
export const fetchHomeMultdata = createAsyncThunk(
  "fetch/homedata",
  async (extraInfo, { dispatch, getState }) => {
    // console.log(extraInfo)
    const res = await axios.get("http://123.207.32.32:8000/home/multidata");

    // todo 第一种在redux实现异步的方法
    // const banners = res.data.data.banner.list
    // const recommends = res.data.data.recommend.list

    // dispatch(changeBanners(banners))
    // dispatch(changeRecommends(recommends))

    // todo 第二种，这个action的时候有三种状态：pending,fulfilled,rejected,可以在extraReducers里监听状态
    // 开始dispatch为pending
    // fulfilled的时候是在return data
    // rejected为抛出异常

    // todo 第三种，链式调用

    return res.data.data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    banners: [],
    recommends: [],
  },
  reducers: {
    // 这里的函数相当于reducer函数里面的一个case，每个case接受一个state(前一个state),一个action:{type:'xxx',payload:xxx}
    changeBanners(state, action) {
      state.banners = action.payload;
      // console.log(action)
    },
    changeRecommends(state, action) {
      state.recommends = action.payload;
    },
  },
  // 链式调用
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeMultdata.pending, (state) => {
        console.log("pending");
      })
      .addCase(fetchHomeMultdata.fulfilled, (state, { payload }) => {
        state.banners = payload.banner.list;
        state.recommends = payload.recommend.list;
      });
  },
  // extraReducers:{
  //   [fetchHomeMultdata.pending](state,{payload}){
  //     console.log('fetchHomeMultdata pending',payload)
  //   },
  //   [fetchHomeMultdata.fulfilled](state,{payload}){
  //     // console.log('fetchHomeMultdata fulfilled',payload)
  //     state.banners=payload.banner.list
  //     state.recommends=payload.recommend.list
  //   },
  //   [fetchHomeMultdata.rejected](){
  //     console.log('fetchHomeMultdata rejected')
  //   }
  // }
});

export const { changeBanners, changeRecommends } = homeSlice.actions;
export default homeSlice.reducer;
