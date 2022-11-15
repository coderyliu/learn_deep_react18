import styled from "styled-components";

export const VipModalWrapper = styled.div `
  position: fixed;
  z-index:102;
  top:180px;
  left:50%;
  width:530px;
  height: 350px;

  transform: translateX(-50%);

  background-color: #fff;
  
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    height:40px;
    padding:0 20px;

    color:#fff;

    background: #222;
    .close-btn{
      display: block;
      width: 10px;
      height: 10px;

      cursor: pointer;
      background: url(${require('@/assets/img/login-cover.png')}) no-repeat 0 -95px;
    }
  }

  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    padding:30px 40px;

    box-sizing: border-box;

    .list{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width:100%;
      margin-top:35px;

      .tip{
        font-size: 16px;
        color:#333;
      }

      .item{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;

        color:#333;
      }
    }

    .open-btn{ 
      width:170px;
      height:40px;
      line-height: 40px;
      margin-top:40px;
      padding:0 10px;
      border-radius:25px;

      text-align: center;
      font-size: 16px;
      color:#fff;

      cursor: pointer;
      box-sizing: content-box;
      background-image: linear-gradient(120deg,#fb5758,#ff8063);
    }
  }
`