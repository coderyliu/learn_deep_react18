import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

import {
  getFirstCategoryData,
  getSecondCategoryData,
  getSubGoodsList
} from "@/api/modules/category";

// ?一级分类请求
export const fetchCategoryData = createAsyncThunk('fetch/categoryData', (info, {
  dispatch
}) => {
  getFirstCategoryData(info.id).then(res => {
    dispatch(changeFirstCateInfoAction(res.result))
  })
})

// ?二级分类请求
export const fetchFilterCategoryData = createAsyncThunk('fetch/subData', (info, {
  dispatch
}) => {
  getSecondCategoryData(info.id).then(res => {
    dispatch(changeSecondCateInfoAction(res.result))
  }).catch(err=>{
    dispatch(changeSecondCateInfoAction({}))
  })
})

// ?请求分类分页数据
export const fetchSubGoodsList = createAsyncThunk('fetch/subGoodsList', (info, {
  dispatch
}) => {
  getSubGoodsList(info).then(res => {
    dispatch(changeSubGoodsListAction(res?.result))
  })
})

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    firstCateInfo: {},
    secondCateInfo: {},
    currentProperty: {},
    subGoodsList: [],
    total: 15,
    currentPage: 1,
    currentSize: 15,
    inventory: false,
    onlyDiscount: false,
    brandId: '',
    attrs: [],
    sortField: ''
  },
  reducers: {
    changeFirstCateInfoAction(state, {
      payload
    }) {
      state.firstCateInfo = payload
    },
    changeSecondCateInfoAction(state, {
      payload
    }) {
      state.secondCateInfo = payload
    },
    changeCurrentPropertyAction(state, {
      payload
    }) {
      state.currentProperty[payload.fatherData['name']] = payload.sonData.id
    },
    changeSubGoodsListAction(state, {
      payload
    }) {
      state.subGoodsList = payload.items
      state.total = payload.counts
    },
    changeAttrsAction(state, {
      payload
    }) {
      const obj = {}
      obj[payload.fatherData.name] = payload.sonData.name

      const arr = state.attrs
      arr.push(obj)

      state.attrs = arr
    },
    changeBrandIdAction(state, {
      payload
    }) {
      state.brandId = payload.id
    },
    changeCurrentPageAction(state, {
      payload
    }) {
      state.currentPage = payload
    },
    changeSortFieldAction(state, {
      payload
    }) {
      state.sortField = payload
    },
    changeOnlyDistanceAction(state, {
      payload
    }) {
      state.onlyDiscount = payload
    },
    changeInventoryAction(state, {
      payload
    }) {
      state.inventory = payload
    }
  }
})

export const {
  changeFirstCateInfoAction,
  changeSecondCateInfoAction,
  changeCurrentPropertyAction,
  changeSubGoodsListAction,
  changeAttrsAction,
  changeBrandIdAction,
  changeCurrentPageAction,
  changeSortFieldAction,
  changeInventoryAction,
  changeOnlyDistanceAction
} = categorySlice.actions

export default categorySlice.reducer