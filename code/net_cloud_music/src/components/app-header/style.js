import styled from "styled-components";

export const AppHeaderWrapper = styled.div `
  width:100%;
  height:70px;
  margin:0;

  color:#ccc;
  font-size: 14px;
  background-color:#242424 ;
  
  .header-inner{
    display: flex;
    align-items: center;

    width:1100px;
    height:70px;
    margin:0 auto;
  }


  .header-left{
    width:170px;
    height:70px;
    margin-right:10px;
    background: url(${require('@/assets/img/sprite_01.png')}) no-repeat 0 0;

    a{
      display: block;
      width:100%;
      height:100%;
      text-indent: -9999px;
    }
  }

  .header-center{
    display: flex;
    align-items: center;
    height:70px;

    margin-right:50px;

    .item{
      line-height:70px;
      padding:0 19px;

      cursor: pointer;
      &:hover{
        color:#fff;
        background-color: #000;
      }
    }

    .item.active{
      color:#fff;
      background-color:#000;
    }
  }

  .header-right{
    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 12px;
    .search{  
      .input{
        padding:10px 15px;
        border-radius:20px;

        border:none;
        outline: none;
      }
    }

    .text{
      padding:8px 15px;
      margin:0 10px;
      border:1px solid #4F4F4F;
      border-radius:20px;
    }

    .login{
      color:#787878;
    }
  }
`