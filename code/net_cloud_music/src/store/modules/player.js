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

export const changeSongPlayAction = createAsyncThunk('song/play', (info, {
  dispatch,
  getState
}) => {
  // tag -1 1
  // ?1.获取当前的playlist,索引
  const playlist = getState().player.playlist
  let currentSongIndex = getState().player.currentSongIndex
  const playSequence = getState().player.playSequence

  // ?2.判断歌曲播放的类型
  switch (playSequence) {
    case 0:
      currentSongIndex = Math.floor(Math.random() * playlist.length)
      break
    default:
      currentSongIndex += info.tag
      break
  }

  // ?3.判断索引是否越界
  if (currentSongIndex < 0) {
    currentSongIndex = playlist.length - 1
  }

  if (currentSongIndex === playlist.length) {
    currentSongIndex = 0
  }

  // ?4.派发事件action
  const currentSong = playlist[currentSongIndex]
  dispatch(changeCurrentSongAction(currentSong))
  dispatch(changeCurrentSongIndexAction(currentSongIndex))
})

// ?获取歌曲详情
export const getSongDetailAction = createAsyncThunk('song/detail', (info, {
  dispatch,
  getState
}) => {
  // ?获取playlist,判断是否在playlist中
  const playlist = getState().player.playlist
  const songIndex = playlist.findIndex((item) => item.id === info.id)

  // todo 如果在 切换歌曲播放，更改索引
  if (songIndex !== -1) {
    const currentSong = playlist[songIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(songIndex))
  } else {
    //todo 如果不在 添加到playlist中
    getSongDetail(info.id).then(res => {
      const song = res.songs && res.songs[0]

      if (!song) return
      // 1.添加到playlist中
      const newPlayList = [...playlist]
      newPlayList.push(song)
      dispatch(changePlayListAction(song))

      // 2.更改索引
      dispatch(changeCurrentSongAction(song))
      dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
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
    currentSong: {
      name: "Beautiful",
      id: 1995654339,
      dt: 231640
    },
    currentSongIndex: 0,
    playlist: [],
    playSequence: 0, //0. 随机 1.顺序 2.单曲循环
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
    changeCurrentSongIndexAction(state, {
      payload
    }) {
      state.currentSongIndex = payload
    },
    changePlaySequenceAction(state, {
      payload
    }) {
      state.playSequence = payload
    },
    changePlayListAction(state, {
      payload
    }) {
      const newList = [...state.playlist]
      const index = newList.findIndex(item => item.id === payload.id)

      if (index !== -1) return
      newList.push(payload)
      state.playlist = newList
    }
  }
})

export const {
  changeSongDetailInfoAction,
  changeSongLyricInfoAction,
  changeSamePlayListAction,
  changeSameSongAction,
  changeCurrentSongAction,
  changeCurrentSongIndexAction,
  changePlaySequenceAction,
  changePlayListAction
} = playerSlice.actions

export default playerSlice.reducer