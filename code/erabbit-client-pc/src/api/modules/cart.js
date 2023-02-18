import {
  subFetch
} from "../config"

// 加入购物车
export const addCartFetch = (skuId, count) => {
  return subFetch.request({
    url: '/member/cart',
    method: 'post',
    data: {
      skuId,
      count
    }
  })
}

// 拉取购物车列表
export const getCartList = () => {
  return subFetch.request({
    url: '/member/cart'
  })
}

// 清空购物车、删除购物车
export const deleteCartFetch = (ids, clearAll = false, clearInvalid = false) => {
  return subFetch.request({
    url: '/member/cart',
    method: 'delete',
    params: {
      ids,
      clearAll,
      clearInvalid
    }
  })
}