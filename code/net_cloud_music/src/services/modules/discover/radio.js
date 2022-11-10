// 主播电台接口
import lyFetch from "@/services";

// 获取电台分类
export function getDjRadioCatelist() {
  return lyFetch.get({
    url: '/dj/catelist'
  })
}

// 获取推荐的radio
export function getDjRadioRecommend(type) {
  return lyFetch.get({
    url: '/dj/recommend/type',
    params: {
      type
    }
  })
}

// 获取热门radio
export function getDjRadioHot(cateId, limit, offset) {
  return lyFetch.get({
    url: '/dj/radio/hot',
    params: {
      cateId,
      limit,
      offset
    }
  })
}