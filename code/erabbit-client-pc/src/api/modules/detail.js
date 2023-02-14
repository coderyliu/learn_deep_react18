import lyFetch from "../index";

// 获取商品详情
export const getGoodsDetailData = (id) => {
  return lyFetch.request({
    url: '/goods',
    params: {
      id
    }
  })
}

// 获取同类商品推荐
export const getSameGoodsRecommend = (id, limit = 16) => {
  return lyFetch.request({
    url: '/goods/relevant',
    params: {
      id,
      limit
    }
  })
}

// 获取热销推荐
export const getHotSellRecommend = (id, limit = 3, type) => {
  return lyFetch.request({
    url: '/goods/hot',
    params: {
      id,
      limit,
      type
    }
  })
}