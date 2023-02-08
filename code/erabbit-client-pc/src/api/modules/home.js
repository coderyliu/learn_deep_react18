import lyFetch from "../index";

// 新鲜好物
export const getHomeNewFreshData=()=>{
  return lyFetch.request({
    url:'/home/new'
  })
}