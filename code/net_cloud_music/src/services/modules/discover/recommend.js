import lyFetch from '../../request'

// 获取发现首页轮播图数据
export function getTopBanner(){
  return lyFetch.get({
    url:'/banner'
  })
}