import lyFetch from "@/services";

// 获取所有榜单的封面
export function getRankingInfo() {
  return lyFetch.get({
    url: '/toplist'
  })
}

// 根据榜单请求详细top歌曲列表
export function getRankingDetail(id) {
  return lyFetch.get({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}