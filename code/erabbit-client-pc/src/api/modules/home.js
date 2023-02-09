import lyFetch from "../index";

// 获取首页轮播数据
export const getHomeBanner = () => {
  return lyFetch.request({
    url: '/home/banner'
  })
}

// 新鲜好物
export const getHomeNewFreshData = () => {
  return lyFetch.request({
    url: '/home/new'
  })
}

// 人气推荐
export const getHomeHotRecommend = () => {
  return lyFetch.request({
    url: '/home/hot'
  })
}

// 热门品牌
export const getHomeHotBrand = () => {
  return lyFetch.request({
    url: '/home/brand'
  })
}

// 产品区块
export const getHomeGoodsField = () => {
  return lyFetch.request({
    url: '/home/goods'
  })
}

// 最新专题
export const getHomeNewSpecial = () => {
  return lyFetch.request({
    url: '/home/special'
  })
}