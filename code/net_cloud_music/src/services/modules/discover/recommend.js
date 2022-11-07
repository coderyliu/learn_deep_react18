import lyFetch from '../../request'

// 获取发现首页轮播图数据
export function getTopBanner(){
  return lyFetch.get({
    url:'/banner'
  })
}

// 获取热门推荐
export function getHotRecommend(){
  return lyFetch.get({
    url:'/personalized'
  })
}

// 获取新碟上架
export function getNewDisk(limit=10){
  return lyFetch.get({
    url:'/album/new',
    params:{
      limit
    }
  })
}

// 获取榜单数据
export function getRankingData(){
  return lyFetch.get({
    url:'/'
  })
}