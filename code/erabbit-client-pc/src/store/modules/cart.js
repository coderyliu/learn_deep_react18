import {
  createSlice,
  // createAsyncThunk
} from "@reduxjs/toolkit";
import {
  persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// todo 暂时结合redux-persist使用dispatch分发一个函数，会出现问题
// todo 这中问题在不使用reduxjs/toolkit不会出现，可以使用createStore
// import {
//   addCartFetch,
//   getCartList
// } from "@/api/modules/cart";

// 请求购物车列表
// export const fetchCartList = createAsyncThunk('fetch/cartList', (info, {
//   dispatch
// }) => {
//   getCartList().then(res => {
//     dispatch(res.result)
//   })
// })

// 添加购物车请求
// export const addCartFetches = createAsyncThunk('addCart/fetch', (info, {
//   dispatch
// }) => {
//   addCartFetch(info.skuId, info.count).then(res => {
//     console.log(res)
//   })
// })

// 将购物车slice包装在一个持久化reducer中
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartList: [],
    guessFavorite: []
  },
  reducers: {
    changeCartListAction(state, {
      payload
    }) {
      state.cartList = payload
    },
    changeGuessFavoriteAction(state, {
      payload
    }) {
      state.guessFavorite = payload
    }
  }
})

export const {
  changeCartListAction,
  changeGuessFavoriteAction
} = cartSlice.actions

const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);

export default persistedReducer