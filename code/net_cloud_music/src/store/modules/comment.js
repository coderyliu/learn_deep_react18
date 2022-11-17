import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";

import {
  getAlbumComment,
  getHotComment,
  getMVComment,
  getSongComment,
  getSongMenuComment
} from "@/services/modules/comment";

export const fetchCommentData = createAsyncThunk('fetch/comment', (info, {
  dispatch
}) => {
  // ?根据资源的类型请求评论数据
  getHotComment(info.id, info.type).then(res => {
    dispatch(changeHotCommentAction(res.hotComments))
  })

  if (info.path === 'song') {
    getSongComment(info.id, info.offset).then(res => {
      dispatch(changeCurrentTypeCommentAction(res.comments))
      dispatch(changeTotalCommentAction(res.total))
    })
  }

  if (info.path === 'songMenu') {
    getSongMenuComment(info.id, info.offset).then(res => {
      dispatch(changeCurrentTypeCommentAction(res.comments))
      dispatch(changeTotalCommentAction(res.total))
    })
  }

  if (info.path === 'album') {
    getAlbumComment(info.id, info.offset).then(res => {
      dispatch(changeCurrentTypeCommentAction(res.comments))
      dispatch(changeTotalCommentAction(res.total))
    })
  }

  if (info.path === 'mv') {
    getMVComment(info.id, info.offset).then(res => {
      dispatch(changeCurrentTypeCommentAction(res.comments))
      dispatch(changeTotalCommentAction(res.total))
    })
  }
})

const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    hotComment: [],
    currentTypeComment: [],
    totalComment: 0
  },
  reducers: {
    changeHotCommentAction(state, {
      payload
    }) {
      state.hotComment = payload
    },
    changeCurrentTypeCommentAction(state, {
      payload
    }) {
      state.currentTypeComment = payload
    },
    changeTotalCommentAction(state, {
      payload
    }) {
      state.totalComment = payload
    }
  }
})

export const {
  changeHotCommentAction,
  changeCurrentTypeCommentAction,
  changeTotalCommentAction
} = commentSlice.actions

export default commentSlice.reducer