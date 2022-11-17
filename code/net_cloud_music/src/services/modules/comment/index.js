// ?获取评论信息
import lyFetch from "@/services";

// 获取热门评论
export function getHotComment(id, type, offset = 0, limit = 15) {
  return lyFetch.get({
    url: '/comment/hot',
    params: {
      id,
      type,
      offset,
      limit
    }
  })
}

// 获取歌曲评论
export function getSongComment(id, offset = 0, limit = 20) {
  return lyFetch.get({
    url: '/comment/music',
    params: {
      id,
      offset,
      limit
    }
  })
}

// 获取专辑评论
export function getAlbumComment(id, offset = 0, limit = 20) {
  return lyFetch.get({
    url: '/comment/album',
    params: {
      id,
      offset,
      limit
    }
  })
}

// 获取歌单评论
export function getSongMenuComment(id, offset = 0, limit = 20) {
  return lyFetch.get({
    url: '/comment/playlist',
    params: {
      id,
      offset,
      limit
    }
  })
}

// 获取mv评论
export function getMVComment(id, offset = 0, limit = 20) {
  return lyFetch.get({
    url: '/comment/mv',
    params: {
      id,
      offset,
      limit
    }
  })
}

// 获取电台节目评论
export function getDjComment(id, offset = 0, limit = 20) {
  return lyFetch.get({
    url: '/comment/dj',
    params: {
      id,
      offset,
      limit
    }
  })
}

// 给评论点赞
export function addLikeCount(id, t, cid, type) {
  return lyFetch.get({
    url: '/comment/like',
    params: {
      id,
      cid,
      t,
      type
    }
  })
}

// 发送/删除评论
export function getSendComment(t, type, id, content, commentId) {
  return lyFetch.get({
    url: '/comment',
    params: {
      t,
      type,
      id,
      content
    }
  })
}