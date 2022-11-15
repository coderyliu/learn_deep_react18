import {
  getAllAlbumList,
  getAllRadioList,
  getAllSongDetail,
  getAllSongList,
  getRadioDetail
} from "@/services/modules/menu";
import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

export const fetchSongList = createAsyncThunk('fetch/allSong', (info, {
  dispatch
}) => {
  getAllSongList(info.id).then(res => {
    dispatch(changeSongListAction(res.songs))
  })

  getAllSongDetail(info.id).then(res => {
    dispatch(changeSongCountDetailAction(res))
  })
})

export const fetchAlbumList = createAsyncThunk('fetch/allAlbum', (info, {
  dispatch
}) => {
  getAllAlbumList(info.id).then(res => {
    dispatch(changeAlbumSongsAction(res.songs))
    dispatch(changeAlbumInfoAction(res.album))
  })
})

export const fetchRadioList = createAsyncThunk('fetch/allRadio', (info, {
  dispatch
}) => {
  getAllRadioList(info.id).then(res => {
    dispatch(changeRadioSongsAction(res.programs))
  })

  getRadioDetail(info.id).then(res => {
    dispatch(changeRadioDetailAction(res.data))
  })
})

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    songList: [],
    songCountDetail: {},
    albumSongs: [],
    albumInfo: {},
    radioSongs: [],
    radioDetail: {},
    currentSealData: {}
  },
  reducers: {
    changeSongListAction(state, {
      payload
    }) {
      state.songList = payload
    },
    changeSongCountDetailAction(state, {
      payload
    }) {
      state.songCountDetail = payload
    },
    changeAlbumSongsAction(state, {
      payload
    }) {
      state.albumSongs = payload
    },
    changeAlbumInfoAction(state, {
      payload
    }) {
      state.albumInfo = payload
    },
    changeRadioSongsAction(state, {
      payload
    }) {
      state.radioSongs = payload
    },
    changeRadioDetailAction(state, {
      payload
    }) {
      state.radioDetail = payload
    },
    changeCurrentSealDataAction(state, {
      payload
    }) {
      state.currentSealData = payload
    }
  }
})

export const {
  changeSongListAction,
  changeSongCountDetailAction,
  changeAlbumSongsAction,
  changeAlbumInfoAction,
  changeRadioSongsAction,
  changeRadioDetailAction,
  changeCurrentSealDataAction
} = menuSlice.actions

export default menuSlice.reducer