import lyRequest from "../index";

export function getHomeDiscountData(){
  return lyRequest.get({
    url:'/home/discount'
  })
}

export function getHomeGoodPriceInfoData() {
  return lyRequest.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighScoreInfoData(){
  return lyRequest.get({
    url:'/home/highscore'
  })
}

export function getHomeHotRecommendData(){
  return lyRequest.get({
    url:'/home/hotrecommenddest'
  })
}

export function getHomeLongForData(){
  return lyRequest.get({
    url:'/home/longfor'
  })
}

export function getHomePlusData(){
  return lyRequest.get({
    url:'/home/plus'
  })
}