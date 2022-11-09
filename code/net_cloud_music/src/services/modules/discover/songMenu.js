import lyFetch from "@/services";

// 获取歌单分类
export function getSongCategory() {
  return lyFetch.get({
    url: '/playlist/catlist'
  })
}

// 请求全部歌单
export function getSongCategoryList(cat = '全部', limit = 50, offset = 0) {
  return lyFetch.get({
    url: '/top/playlist',
    params: {
      cat,
      limit,
      offset
    }
  })
}