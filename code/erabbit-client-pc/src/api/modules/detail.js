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