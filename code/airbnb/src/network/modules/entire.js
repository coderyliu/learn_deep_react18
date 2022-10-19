import lyRequest from "../index";

export function getEntireRoomListData(offset = 0) {
  return lyRequest.get({
    url: '/entire/list',
    params: {
      offset: offset * 20,
      size: 20
    }
  })
}