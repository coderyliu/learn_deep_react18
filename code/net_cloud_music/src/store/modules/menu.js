import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

import {
  getOtherAlbum
} from "@/services/modules/discover/disk";
import {
  getHotDj
} from "@/services/modules/discover/radio";
import {
  getAllAlbumList,
  getAllRadioList,
  getAllSongDetail,
  getAllSongList,
  getRadioDetail,
  likeSongUsers
} from "@/services/modules/menu";
import {
  getHotSongMenuList
} from "@/services/modules/discover/songMenu";

export const fetchSongList = createAsyncThunk('fetch/allSong', (info, {
  dispatch
}) => {
  getAllSongList(info.id).then(res => {
    dispatch(changeSongListAction(res.songs))
  })

  getAllSongDetail(info.id).then(res => {
    dispatch(changeSongCountDetailAction(res))
  })

  likeSongUsers(info.id).then(res => {
    dispatch(changeLikeUserAction(res.subscribers))
  })

  getHotSongMenuList().then(res => {
    dispatch(changeHotSongMenuAction(res.playlists))
  })
})

export const fetchAlbumList = createAsyncThunk('fetch/allAlbum', (info, {
  dispatch
}) => {
  getAllAlbumList(info.id).then(res => {
    dispatch(changeAlbumSongsAction(res.songs))
    dispatch(changeAlbumInfoAction(res.album))
  })

  getOtherAlbum(info.rid).then(res => {
    dispatch(changeOtherAlbumAction(res.hotAlbums))
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

  getHotDj().then(res => {
    dispatch(changeHotRadioAction(res.djRadios))
  })
})

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    songList: [],
    songCountDetail: {},
    likeSongUser: [],
    hotSongMenu: [],
    albumSongs: [],
    albumInfo: {},
    otherAlbum: [],
    radioSongs: [],
    radioDetail: {},
    hotRadio: [],
    currentSealData: {}
  },
  reducers: {
    changeSongListAction(state, {
      payload
    }) {
      state.songList = payload
    },
    changeHotSongMenuAction(state, {
      payload
    }) {
      state.hotSongMenu = payload
    },
    changeSongCountDetailAction(state, {
      payload
    }) {
      state.songCountDetail = payload
    },
    changeLikeUserAction(state, {payload}) {
      state.likeSongUser= payload
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
    changeOtherAlbumAction(state, {
      payload
    }) {
      state.otherAlbum = payload
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
    changeHotRadioAction(state, {
      payload
    }) {
      state.hotRadio = payload
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
  changeHotSongMenuAction,
  changeSongCountDetailAction,
  changeLikeUserAction,
  changeAlbumSongsAction,
  changeAlbumInfoAction,
  changeOtherAlbumAction,
  changeRadioSongsAction,
  changeRadioDetailAction,
  changeHotRadioAction,
  changeCurrentSealDataAction
} = menuSlice.actions

export default menuSlice.reducer