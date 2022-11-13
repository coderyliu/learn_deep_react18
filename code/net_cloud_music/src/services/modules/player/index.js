// ?歌曲详情相关
import lyFetch from "@/services";

// 获取歌曲详情
export function getSongDetail(ids) {
  return lyFetch.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

// 获取歌词信息
export function getSongLyric(id) {
  return lyFetch.get({
    url: '/lyric',
    params: {
      id
    }
  })
}

// 获取相似歌单
export function getSameSongMenu(id) {
  return lyFetch.get({
    url: '/simi/playlist',
    params: {
      id
    }
  })
}

// 获取相似歌曲
export function getSameSong(id) {
  return lyFetch.get({
    url: '/simi/song',
    params: {
      id
    }
  })
}