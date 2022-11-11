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
    totalCount: 0
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
    }
  }
})

export const {
  changeCategoryListAction,
  changeCategoryDataAction
} = songMenuSlice.actions

export default songMenuSlice.reducer