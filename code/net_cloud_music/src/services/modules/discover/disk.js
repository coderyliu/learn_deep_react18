import lyFetch from "@/services";

// 获取热门新碟
export function getHotDiskData() {
  return lyFetch.get({
    url: '/album/newest'
  })
}

// 获取全部新碟
export function getAllDiskData(limit = 30, offset = 0) {
  return lyFetch.get({
    url: '/album/new',
    params: {
      limit,
      offset
    }
  })
}

// ?获取歌手的其他热门专辑
export function getOtherAlbum(id) {
  return lyFetch.get({
    url: '/artist/album',
    params: {
      id
    }
  })
}