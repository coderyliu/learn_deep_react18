import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

import {
  getSameSinger,
  getSingerAlbum,
  getSingerDesc,
  getSingerHotSong,
  getSingerMv
} from "@/services/modules/artist";

export const fetchArtistData = createAsyncThunk('fetch/artistData', (info, {
  dispatch
}) => {
  getSingerHotSong(info.id).then(res => {
    dispatch(changeHotSingleSongAction(res.hotSongs))
    dispatch(changeArtistSealInfoAction(res.artist))
  })

  getSameSinger(info.id).then(res => {
    // console.log(res)
  })
})
export const fetchArtistMv = createAsyncThunk('fetch/artistMv', (info, {
  dispatch
}) => {
  getSingerMv(info.id).then(res => {
    dispatch(changeSimiMvAction(res.mvs))
  })
})

export const fetchArtistAlbum = createAsyncThunk('fetch/artistAlbum', (info, {
  dispatch
}) => {
  getSingerAlbum(info.id,12,info.offset).then(res => {
    dispatch(changeAlbumListAction(res.hotAlbums))
    dispatch(changeAlbumMoreAction(res.artist.albumSize))
  })
})

export const fetchArtistDesc = createAsyncThunk('fetch/artistDesc', (info, {
  dispatch
}) => {
  getSingerDesc(info.id).then(res => {
    dispatch(changeArtistInfoAction(res))
  })
})

const artistSlice = createSlice({
  name: "artist",
  initialState: {
    hotSingleSong: [],
    artistSealInfo: {},
    artistInfo: {},
    simiMv: [],
    albumList: [],
    albumMore: 0,
    currentTab: 'song'
  },
  reducers: {
    changeHotSingleSongAction(state, {
      payload
    }) {
      state.hotSingleSong = payload
    },
    changeArtistSealInfoAction(state, {
      payload
    }) {
      state.artistSealInfo = payload
    },
    changeArtistInfoAction(state, {
      payload
    }) {
      state.artistInfo = payload
    },
    changeSimiMvAction(state, {
      payload
    }) {
      state.simiMv = payload
    },
    changeAlbumListAction(state, {
      payload
    }) {
      state.albumList = payload
    },
    changeAlbumMoreAction(state, {
      payload
    }) {
      state.albumMore = payload
    },
    changeCurrentTabAction(state, {
      payload
    }) {
      state.currentTab = payload
    }
  }
})

export const {
  changeHotSingleSongAction,
  changeArtistSealInfoAction,
  changeArtistInfoAction,
  changeSimiMvAction,
  changeAlbumListAction,
  changeAlbumMoreAction,
  changeCurrentTabAction
} = artistSlice.actions

export default artistSlice.reducer