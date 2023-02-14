import lyFetch from "..";
import {
  logFetch
} from "../config";

// 账号登录请求
export const LogWithAccount = (account, password) => {
  return lyFetch.request({
    url: '/login',
    method: 'post',
    data: {
      account,
      password
    }
  })
}

// 手机号登录请求
export const logWithPhoneCate = (phone, cate) => {
  return logFetch.request({
    url: '/login/cellphone',
    params: {
      phone,
      password: 'ly20010421'
    }
  })
}

// 发送验证码
export const getLoginCaptcha = (phone) => {
  return logFetch.request({
    url: '/captcha/sent',
    params: {
      phone
    }
  })
}

// 验证验证码
export const verifyLoginCaptcha = (phone, cate) => {
  return logFetch.request({
    url: '/captcha/verify',
    params: {
      phone,
      captcha: cate
    }
  })
}

// 退出登录
export const logoutApp = () => {
  return logFetch.request({
    url: '/logout'
  })
}