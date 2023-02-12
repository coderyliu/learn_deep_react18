import lyFetch from "../index";

// 获取分类页一级类目
export const getFirstCategoryData = (id) => {
  return lyFetch.request({
    url: '/category',
    params: {
      id
    }
  })
}

