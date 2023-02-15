// 导出基准地址，原因：其他地方不是通过axios发请求的地方用上基准地址
export const BASEURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'
export const TIMEOUT = 1000 * 30

// ?由于没有登录接口，登录接口使用网易云提供的api
export const LOG_BASEURL = 'http://www.coderyliu.online:3000'

// ?二级分类的接口的baseURL也不是同一个
export const SUB_BASEURL = 'https://apipc-xiaotuxian-front.itheima.net'