import {
  getAllDiskData,
  getHotDiskData
} from "@/services/modules/discover/disk";
import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";

export const fetchDiskData = createAsyncThunk('fetch/disk', (info, {
  dispatch
}) => {
  if (info.isGetCate) {
    getHotDiskData().then(res => {
      dispatch(changeHotDiskListAction(res.albums))
    })
  }

  getAllDiskData(info.limit, info.offset).then(res => {
    dispatch(changeAllDiskListAction(res))
  })
})

const diskSlice = createSlice({
  name: 'disk',
  initialState: {
    hotDiskList: [],
    allDiskList: [],
    totalDisk: 0
  },
  reducers: {
    changeHotDiskListAction(state, {
      payload
    }) {
      state.hotDiskList = payload
    },
    changeAllDiskListAction(state, {
      payload
    }) {
      state.allDiskList = payload.albums
      state.totalDisk = payload.total
    }
  }
})

export const {
  changeHotDiskListAction,
  changeAllDiskListAction
} = diskSlice.actions

export default diskSlice.reducer