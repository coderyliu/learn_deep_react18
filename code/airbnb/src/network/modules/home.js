import lyRequest from "../index";

export function getHomeGoodPriceInfoData() {
  return lyRequest.get({
    url: '/home/goodprice'
  })
}