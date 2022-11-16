// ?mv相关
import lyFetch from "@/services";

// 获取mv数据
export function getMVDetailData(mvid) {
  return lyFetch.get({
    url: '/mv/detail',
    params: {
      mvid
    }
  })
}

// 获取mv播放地址
export function getAddressMV(id) {
  return lyFetch.get({
    url: '/mv/url',
    params: {
      id
    }
  })
}

// 获取推荐mv
export function getRecommendMv() {
  return lyFetch.get({
    url: '/personalized/mv'
  })
}

// 获取相似mv
export function getSameMv(mvid) {
  return lyFetch.get({
    url: '/simi/mv',
    params: {
      mvid
    }
  })
}

// 获取mv点赞数，评论数，转发数
export function getMvLikeCount(mvid) {
  return lyFetch.get({
    url: '/mv/detail/info',
    params: {
      mvid
    }
  })
}