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
export function getRankingData(id){
  return lyFetch.get({
    url:'/playlist/detail',
    params:{
      id
    }
  })
}

// 获取热门歌手主播
export function getArtistData(limit=10){
  return lyFetch.get({
    url:'/artist/list',
    params:{
      limit
    }
  })
}

// 获取热门主播
export function getPopularDJ(limit=30){
  return lyFetch.get({
    url:'/dj/toplist/popular',
    params:{
      limit
    }
  })
}