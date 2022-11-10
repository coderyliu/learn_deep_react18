import dayjs from "dayjs"

// 格式化播放次数
export function formatCount(count) {
  if (count < 0 || !count) return 0
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万'
  } else {
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}

// 时间格式化
export function getUpdateTime(timestamp){
  return dayjs(timestamp).format('MM-DD')
}

// 将毫秒转化为分钟
export function secondToMinuteFn(timestamp){
  return dayjs(timestamp).format('mm:ss')
}