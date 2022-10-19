import * as actionTypes from './constants'
import {
  getEntireRoomListData
} from '@/network/modules/entire'

export const changeCurrentPageACtion = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountACtion = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

export const fetchEntireData = (page = 0) => {
  return async (dispatch) => {
    // 网络请求之前，loading
    dispatch(changeIsLoadingAction(true))
    dispatch(changeCurrentPageACtion(page))

    // 网络请求
    const res = await getEntireRoomListData(page)

    // 派发data
    dispatch(changeIsLoadingAction(false))
    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalCountACtion(res.totalCount))
  }
}