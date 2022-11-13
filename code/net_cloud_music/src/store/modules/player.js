import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

import {
  getSameSong,
  getSameSongMenu,
  getSongDetail,
  getSongLyric
} from "@/services/modules/player";

import { ParseLyric } from "@/utils/lrc-parse";

export const fetchPlayerData = createAsyncThunk('fetch/player', (info, {
  dispatch
}) => {
  getSongDetail(info.id).then(res => {
    dispatch(changeSongDetailInfoAction(res.songs[0]))
  })

  getSongLyric(info.id).then(res => {
    const lyrics=ParseLyric(res.lrc.lyric)
    dispatch(changeSongLyricInfoAction(lyrics))
  })

  getSameSongMenu(info.id).then(res => {
    dispatch(changeSamePlayListAction(res.playlists))
  })

  getSameSong(info.id).then(res => {
    dispatch(changeSameSongAction(res.songs))
  })
})

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    songDetailInfo: {},
    songLyricInfo: [],
    samePlaylist: [],
    sameSong: []
  },
  reducers: {
    changeSongDetailInfoAction(state, {
      payload
    }) {
      state.songDetailInfo = payload
    },
    changeSongLyricInfoAction(state, {
      payload
    }) {
      state.songLyricInfo = payload
    },
    changeSamePlayListAction(state, {
      payload
    }) {
      state.samePlaylist = payload
    },
    changeSameSongAction(state, {
      payload
    }) {
      state.sameSong = payload
    }
  }
})

export const {
  changeSongDetailInfoAction,
  changeSongLyricInfoAction,
  changeSamePlayListAction,
  changeSameSongAction
} = playerSlice.actions

export default playerSlice.reducer