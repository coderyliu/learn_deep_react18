import {
  getDjRadioCatelist,
  getDjRadioHot,
  getDjRadioRecommend
} from "@/services/modules/discover/radio";
import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";

export const fetchRadioData = createAsyncThunk('fetch/radio', (info, {
  dispatch
}) => {
  if (info.isGetCate) {
    getDjRadioCatelist().then(res => {
      dispatch(changeCategoryListAction(res.categories))
    })
  }

  if (info.isGetExcellent) {
    getDjRadioRecommend(info.id).then(res => {
      dispatch(changeExcellentDataAction(res.djRadios))
    })
  }

  getDjRadioHot(info.id, info.offset).then(res => {
    // ?过滤新电台
    const arr = []
    for (let item of res.djRadios) {
      if (arr.length > 21) {
        break
      }

      if (item.categoryId === info.id) {
        arr.push(item)
      }
    }
    dispatch(changeRadioDataAction({
      arr,
      count: res.count
    }))
    dispatch(changeCategoryIdAction(info.id))
  })
})

const radioSlice = createSlice({
  name: 'radio',
  initialState: {
    categoryList: [],
    hotRadioData: [],
    totalCount: 0,
    excellentData: [],
    categoryId: 3
  },
  reducers: {
    changeCategoryListAction(state, {
      payload
    }) {
      state.categoryList = payload
    },
    changeExcellentDataAction(state, {
      payload
    }) {
      state.excellentData = payload
    },
    changeRadioDataAction(state, {
      payload
    }) {
      state.hotRadioData = payload.arr
      state.totalCount = payload.count
    },
    changeCategoryIdAction(state, {
      payload
    }) {
      state.categoryId = payload
    }
  }
})

export const {
  changeCategoryListAction,
  changeExcellentDataAction,
  changeRadioDataAction,
  changeCategoryIdAction
} = radioSlice.actions

export default radioSlice.reducer