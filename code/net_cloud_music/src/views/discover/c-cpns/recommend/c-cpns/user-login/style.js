import styled from 'styled-components'

export const UserLoginWrapper=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 126px;
  padding:20px 15px;

  background: url(${require('@/assets/img/sprite_02.png')}) no-repeat 0 0;

  .desc{
    font-size: 12px;
    color:#666;
  }

  .login-btn{
    span{
      display: block;
      width: 100px;
      line-height: 31px;
      margin-top:15px;

      text-align: center;
      color:#fff;

      cursor: pointer;
      background: url(${require('@/assets/img/sprite_02.png')}) no-repeat 0 -195px;
    }
  }
`