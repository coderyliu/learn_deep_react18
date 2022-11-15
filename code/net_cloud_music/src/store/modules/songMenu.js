import {
  getSongCategory,
  getSongCategoryList
} from "@/services/modules/discover/songMenu";
import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

export const fetchSongMenuData = createAsyncThunk('fetch/songMenu', (info, {
  dispatch
}) => {
  if (info.isGetCate) {
    getSongCategory().then(res => {
      dispatch(changeCategoryListAction(res))
    })
  }

  getSongCategoryList(info.cat, info.limit, info.offset).then(res => {
    dispatch(changeCategoryDataAction(res))
  })
})

const songMenuSlice = createSlice({
  name: 'songMenu',
  initialState: {
    categoryList: {},
    categoryData: [],
    currentCate: '全部',
    totalCount: 0,
    isShowSelectModal: false
  },
  reducers: {
    changeCategoryListAction(state, {
      payload
    }) {
      state.categoryList = payload
    },
    changeCategoryDataAction(state, {
      payload
    }) {
      state.totalCount = payload.total
      state.categoryData = payload.playlists
    },
    changeCurrentCateAction(state, {
      payload
    }) {
      state.currentCate = payload
    },
    changeIsShowModalAction(state, {
      payload
    }) {
      state.isShowSelectModal = payload
    }
  }
})

export const {
  changeCategoryListAction,
  changeCategoryDataAction,
  changeCurrentCateAction,
  changeIsShowModalAction
} = songMenuSlice.actions

export default songMenuSlice.reducer