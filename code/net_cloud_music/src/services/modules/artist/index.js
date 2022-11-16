// ?请求歌手相关
import lyFetch from "@/services";

// 获取歌手热门歌曲
export function getSingerHotSong(id) {
  return lyFetch.get({
    url: '/artists',
    params: {
      id
    }
  })
}

// 请求歌手全部歌曲
export function getSingerAllSong(id) {
  return lyFetch.get({
    url: '/artist/songs',
    params: {
      id
    }
  })
}

// 获取歌手mv
export function getSingerMv(id) {
  return lyFetch.get({
    url: '/artist/mv',
    params: {
      id
    }
  })
}

// 获取歌手专辑
export function getSingerAlbum(id, limit = 12,offset=0) {
  return lyFetch.get({
    url: '/artist/album',
    params: {
      id,
      limit,
      offset
    }
  })
}

// 获取歌手描述
export function getSingerDesc(id) {
  return lyFetch.get({
    url: '/artist/desc',
    params: {
      id
    }
  })
}

// 获取歌手详情
export function getSingerDetail(id) {
  return lyFetch.get({
    url: '/artist/detail',
    params: {
      id
    }
  })
}

// 获取相似歌手
export function getSameSinger(id) {
  return lyFetch.get({
    url: '/simi/artist',
    params: {
      id
    }
  })
}