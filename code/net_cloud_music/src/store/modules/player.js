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

import {
  ParseLyric
} from "@/utils/lrc-parse";

export const fetchPlayerData = createAsyncThunk('fetch/player', (info, {
  dispatch
}) => {
  getSongDetail(info.id).then(res => {
    dispatch(changeSongDetailInfoAction(res.songs[0]))
  })

  getSongLyric(info.id).then(res => {
    const lyrics = ParseLyric(res.lrc.lyric)
    dispatch(changeSongLyricInfoAction(lyrics))
  })

  if (info.isGetCate) {
    getSameSongMenu(info.id).then(res => {
      dispatch(changeSamePlayListAction(res.playlists))
    })

    getSameSong(info.id).then(res => {
      dispatch(changeSameSongAction(res.songs))
    })
  }
})

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    songDetailInfo: {},
    songLyricInfo: [],
    samePlaylist: [],
    sameSong: [],
    currentSong: {},
    playlist: []
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
    },
    changeCurrentSongAction(state, {
      payload
    }) {
      state.currentSong = payload
    },
    changePlayListAction(state, {
      payload
    }) {
      const playlist = state.playlist

      for (let item of playlist) {
        if (item.id === payload.id) {
          return
        }
      }

      playlist.push(payload)
      state.playlist = playlist
    }
  }
})

export const {
  changeSongDetailInfoAction,
  changeSongLyricInfoAction,
  changeSamePlayListAction,
  changeSameSongAction,
  changeCurrentSongAction,
  changePlayListAction
} = playerSlice.actions

export default playerSlice.reducer