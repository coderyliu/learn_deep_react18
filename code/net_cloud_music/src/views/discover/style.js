import styled from "styled-components";

export const DiscoverWrapper=styled.div`
  margin-top:30px;

  .btn-back{
    position: fixed;
    left:50%;
    margin-left:500px;
    bottom:160px;

    width: 49px;
    height: 44px;

    text-align: center;
    color:#333;
    
    cursor: pointer;
    background: url(${require('@/assets/img/sprite.png')}) no-repeat -265px -47px;
  }
`