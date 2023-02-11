import styled from "styled-components";

export const HomeListItemV3Wrapper=styled.div`
  position:relative;
  width:404px;
  height: 360px;
  margin-right:6px;
  
  overflow:hidden;
  background-color:#fff ;
  transition:all 0.5s ease;

  &:hover{
    transform:translateY(-6px);
    box-shadow:5px 5px 10px rgba(0,0,0,.1);
  }

  .top-cover{
    width:100%;
    height: 288px;

    img{
      width:100%;
      height: 100%;

      object-fit:cover;
      cursor:pointer;
    }
  }

  > .covered{
    position: absolute;
    z-index:98;
    top:220px;
    right:0;
    bottom:72px;
    left:0;

    background-color:rgba(0,0,0,.3) ;
    backdrop-filter:blur(1px);
  }

  .bottom-info{
    display: flex;
    align-items:center;

    width:100%;
    height: 72px;
    padding:0 15px;

    font-size:15px;
    color:#666;

    .left-info{
      flex:1;
      display: flex;
      align-items:center;

      height: 100%;

      > .item{
        margin-right:30px;

        cursor:pointer;
      }
    }

    .number{
      color:#333;
      margin-left:5px;
    }

    .right-info{
      width:60px;
      line-height: 100%;

      text-align:center;
      cursor: pointer;
    }
  }
  
  .cover-info{
    position: absolute;
    z-index:99;
    top:220px;
    right:0;
    bottom:72px;
    left:0;

    display: flex;
    align-items:center;

    padding:0 15px;

    .left-desc{
      flex:1;

      margin-right:10px;

      .title{
        width:300px;

        color:#fff;
        font-size:20px;

        cursor: pointer;
      }

      .summary{
        width:300px;

        color:#999;
        font-size:18px;

        cursor: pointer;
      }
    }

    .right-desc{
      line-height:18px;
      padding:5px;
      border-radius:2px;

      color:#cf4444;
      font-size:14px;
      text-align:center;

      background-color:#fff ;
    }
  }
`