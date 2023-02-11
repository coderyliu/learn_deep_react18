import styled from "styled-components";

export const AppSwiperV1Wrapper=styled.div`
  position:relative;
  width:100%;
  height: 500px;

  box-sizing:content-box;

  .control-wrap{
    position: absolute;
    z-index:99;
    top:0;
    right:0;
    bottom:0;
    left:0;

    display: flex;
    align-items:center;
    justify-content:space-between;

    .left-arrow,
    .right-arrow{
      display: flex;
      justify-content:center;
      align-items:center;

      width:100px;
      height: 100%;

      .control-left,
      .control-right{
        display:none;
        width:57px;
        height: 57px;

        background: url(${require('@/assets/imgs/banner-control-left.png')}) no-repeat center ;
        background-color:rgba(0,0,0,.3) ;
      }

      .control-right{
        background: url(${require('@/assets/imgs/banner-control-right.png')}) no-repeat center ;
        background-color:rgba(0,0,0,.3) ;
      }

      &:hover .control{
        display:block;
      }
    }
  }

  .banner-outer{
    position:relative;
    width:100%;
    height:100%;

    overflow:hidden;

    .banner-inner{
      position: absolute;
      left:0;
      z-index:98;

      display: flex;
      align-items:center;
      justify-content:flex-start;

      width:${(props)=>props.imgsLength}*1240px;
      height: 100%;

      transition:all 0.5s ease;

      .banner-list-item{
        width:1240px;
        height: 100%;

        img{
          width:100%;
          height:100%;
          object-fit:cover;
        }
      }
    }
  }
  .indicator-inner {
    position: absolute;
    left: 50%;
    bottom: 20px;
    z-index: 99;

    display: flex;
    align-items: center;

    transform:translateX(-50%);

    .indicator-item {
      width: 12px;
      height: 12px;
      margin-right:15px;
      border-radius: 50% ;

      cursor: pointer;
      background-color: rgba(0,0,0,.2);

      &:hover{
        background-color:#fff ;
      }
    }

    .indicator-item.active{
      background-color:#fff ;
    } 
  }
`