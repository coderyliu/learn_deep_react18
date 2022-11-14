import lyFetch from "@/services";

// ?手机号登录请求
export function loginFetch(phone, cate) {
  return lyFetch.get({
    url: '/login/cellphone',
    params: {
      phone,
      captcha: cate
    }
  })
}

// ?发送验证码
export function getLoginCaptFetch(phone) {
  return lyFetch.get({
    url: '/captcha/sent',
    params: {
      phone
    }
  })
}

// ?验证验证码
export function validateCaptFetch(phone, cate) {
  return lyFetch.get({
    url: '/captcha/verify',
    params: {
      phone,
      captcha: cate
    }
  })
}

// 退出
export function logoutMusicApp(){
  return lyFetch.get({
    url:'/logout'
  })
}