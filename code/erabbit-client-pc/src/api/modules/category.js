import lyFetch from "../index";
import {
  subFetch
} from "../config";

// 获取全部分类
export const getAllCategoryData = () => {
  return lyFetch.request({
    url: '/home/category/head'
  })
}

// 获取分类页一级类目
export const getFirstCategoryData = (id) => {
  return lyFetch.request({
    url: '/category',
    params: {
      id
    }
  })
}

// 获取分类页二级分类
export const getSecondCategoryData = (id) => {
  return subFetch.request({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

// 获取商品列表
export const getSubGoodsList = (data) => {
  return subFetch.request({
    url: '/category/goods/temporary',
    method: 'post',
    data
  })
}