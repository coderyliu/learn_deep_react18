// 主播电台接口
import lyFetch from "@/services";

// 获取电台分类
export function getDjRadioCatelist() {
  return lyFetch.get({
    url: '/dj/catelist'
  })
}

// 获取新晋/热门的radio
export function getDjRadioNew(type, offset = 0, limit = 200) {
  return lyFetch.get({
    url: '/dj/toplist',
    params: {
      type,
      offset,
      limit
    }
  })
}

// 获取分类推荐的radio
export function getDjRadioRecommend(type) {
  return lyFetch.get({
    url: '/dj/recommend/type',
    params: {
      type
    }
  })
}

// 获取热门radio
export function getDjRadioHot(cateId, offset, limit = 22) {
  return lyFetch.get({
    url: '/dj/radio/hot',
    params: {
      cateId,
      offset,
      limit
    }
  })
}

// ?获取热门电台
export function getHotDj() {
  return lyFetch.get({
    url: '/dj/hot'
  })
}