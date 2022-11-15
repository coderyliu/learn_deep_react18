// ?请求某个专辑或者歌单下面的歌曲列表
import lyFetch from "@/services";

// 获取歌单所有歌曲
export function getAllSongList(id) {
  return lyFetch.get({
    url: '/playlist/track/all',
    params: {
      id
    }
  })
}

// 获取歌单的详情动态
export function getAllSongDetail(id) {
  return lyFetch.get({
    url: '/playlist/detail/dynamic',
    params: {
      id
    }
  })
}

// 获取喜欢这个歌单的用户
export function likeSongUsers(id) {
  return lyFetch.get({
    url: '/playlist/subscribers',
    params: {
      id
    }
  })
}

// 获取专辑内容
export function getAllAlbumList(id) {
  return lyFetch.get({
    url: '/album',
    params: {
      id
    }
  })
}

// 获取电台节目
export function getAllRadioList(rid) {
  return lyFetch.get({
    url: '/dj/program',
    params: {
      rid
    }
  })
}

// 获取电台详情
export function getRadioDetail(rid) {
  return lyFetch.get({
    url: '/dj/detail',
    params: {
      rid
    }
  })
}