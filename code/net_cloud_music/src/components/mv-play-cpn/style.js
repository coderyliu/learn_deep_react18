import styled from "styled-components";

export const MVPlayCpnWrapper = styled.div `
  width:100%;

  .top{
    display: flex;
    align-items:center;
    width:100%;
    margin-bottom:5px;

    .icon{
      display: block;
      width:32px;
      height: 18px;
      margin-right:5px;

      background: url(${require('@/assets/img/icon2.png')}) no-repeat -230px -480px;
    }

    .title{
      margin-right:15px;
      font-size:24px;
      font-weight:600;
    }

    .name{
      width:100px;
      font-size:12px;
      color:#0c73c2;

      cursor: pointer;
    }
  }

  .count-wrap{
    display: flex;
    justify-content:flex-start;
    align-items:center;
    width:100%;
    margin-top:10px;

    font-size:12px;
    color:#333;

    .outer{
      width:96px;
      margin-right:10px;
      padding-left:12px;

      background: url(${require('@/assets/img/button2.png')}) no-repeat 0 -59px;
      
      .item{  
        line-height:30px;

        cursor: pointer;
        background: url(${require('@/assets/img/button2.png')}) no-repeat right -100px;

        .like-icon{
          display: inline-block;
          width:17px;
          height: 15px;
          margin-right:5px;

          background: url(${require('@/assets/img/button2.png')}) no-repeat 0 -95px;
        }
      }
    }
    
    .outer2{
      width:76px;
      line-height:30px;
      padding-left:28px;
      margin-right:10px;

      cursor:pointer;
      background: url(${require('@/assets/img/button2.png')}) no-repeat 0 -977px;

      .collect{
        background: url(${require('@/assets/img/button2.png')}) no-repeat right  -100px;
      }
    }
    
    .outer3{
      width:76px;
      line-height:30px;
      padding-left:28px;

      cursor: pointer;
      background: url(${require('@/assets/img/button2.png')}) no-repeat 0 -1225px;

      .share{
        background: url(${require('@/assets/img/button2.png')}) no-repeat right  -100px;
      }
    }
  }
`