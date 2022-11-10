import lyFetch from "@/services";

// 热门歌手分类列表
export function getSingerCategoryList(area, type, initial) {
  let url = 'artist/list'
  let params = {
    limit: 100
  }
  if (area === -1 && type ===1) {
    url = '/top/artist'
  } else {
    if (area === -1) {
      params = {
        limit: 100,
        cat: 5001
      }
    } else {
      params = {
        limit: 100,
        type,
        area,
        initial
      }
    }
  }

  return lyFetch.get({
    url,
    params
  })
}