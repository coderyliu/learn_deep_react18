import lyFetch from ".."
// import { subFetch } from "../config"

// 加入购物车
export const addCartFetch = (skuId, count) => {
  return lyFetch.request({
    url: '/member/cart',
    method: 'post',
    data: {
      count,
      skuId
    }
  })
}

// 拉取购物车列表
export const getCartList = () => {
  return lyFetch.request({
    url: '/member/cart'
  })
}

// 获取商品的 最新价格  库存  是否有效
export const getNewCartGoods = (skuId) => {
  return lyFetch.request({
    url: `/goods/stock/${skuId}`
  })
}

// 获取商品对应的sku数据
export const getGoodsSku = (skuId) => {
  return lyFetch.request({
    url: `/goods/sku/${skuId}`
  })
}

// 清空购物车、删除购物车
export const deleteCartFetch = (ids, clearAll = false, clearInvalid = false) => {
  return lyFetch.request({
    url: '/member/cart',
    method: 'delete',
    params: {
      ids:[ids],
      clearAll,
      clearInvalid
    }
  })
}

// 修改购物车商品（状态，数量）
export const updateCartFetch = (skuId, selected, count) => {
  return lyFetch.request({
    url: `/member/cart/${skuId}`,
    method: 'put',
    data: {
      selected,
      count
    }
  })
}