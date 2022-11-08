import React, { memo } from 'react'

import { UserLoginWrapper } from './style'

const UserLogin = memo(() => {
  return (
    <UserLoginWrapper>
      <div className="desc">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </div>
      <div className="login-btn">
        <span>用户登录</span>
      </div>
    </UserLoginWrapper>
  )
})

export default UserLogin