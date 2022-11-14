import styled from "styled-components";

export const AppHeaderWrapper = styled.div `
  width:100%;
  height:70px;
  margin:0;

  color:#ccc;
  font-size: 14px;
  background-color:#242424 ;
  
  .header-inner{
    position: relative;
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
      position: relative;
      line-height:70px;
      padding:0 19px;

      cursor: pointer;
      &:hover{
        color:#fff;
        background-color: #000;
      }

      .triangle2{
        position: absolute;
        z-index:99;
        left:50%;
        bottom:0;
        display: block;
        width:0;
        height:0;

        border:5px solid transparent;
        border-bottom-color:#C20C0C;

        transform: translateX(-50%);
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
      margin:0 15px;
      border:1px solid #4F4F4F;
      border-radius:20px;
      cursor: pointer;
    }

    .login{
      color:#787878;
      cursor: pointer;
    }

    .avatar{
      width:30px;
      height: 30px;
      margin-left:10px; 
      
      img{
        width:100%;
        height:100%;
        border-radius: 50%;
      }
    }
  }

  .profile-wrap{
      position: absolute;
      z-index:-1;
      top:60px;
      right:-40px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      width:158px;
      border-radius: 5px;

      cursor: pointer;
      background-color: #242424;

      .iten{
        display: flex;
        align-items: center;
        width:100%;
        padding:5px 20px;

        &:nth-of-type(4){
          border-bottom:1px solid #000;
        }

        &:nth-of-type(6){
          border-bottom:1px solid #000;
        }

        .icon{
          display: block;
          width: 18px;
          height: 18px;
          margin-right:5px;

          color:#ccc;
          background: url(${require('@/assets/img/login_icon.png')}) no-repeat 0 9999px;
        }

        .mine{
          background-position: 0 -80px;
        }

        .message{
          background-position: -20px -120px;
        }

        .grade{
          background-position: 0 -100px;
        }

        .vip{
          background-position: 0 -221px;
        }

        .set{
          background-position: 0 -140px;
        }

        .name{
          background-position: -20px -142px;
        }

        .exit{
          background-position: 0 -200px;
        }
      }
    }

  .recommend-nav{
    position: relative;
    width:100%;
    height: 35px;

    background-color: #C20C0C;

    .nav-wrap{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width:1100px;
      height: 35px;

      margin:0 auto;
      padding-left:200px;

      .iten{
        padding:1px 15px;
        margin-right:40px;
        border-radius:20px;

        font-size: 13px;
        color:#fff;

        cursor: pointer;

        &:hover{
          background-color: #9B0909;
        }
      }

      .iten.active{
        background-color: #9B0909;
      }
    }
  }
`