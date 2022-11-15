import styled from "styled-components"

export const CategorySectionWrapper = styled.div `
  position: absolute;
  z-index:105;
  top:85px;
  width:720px;
  height:457px;
  border:1px solid #d3d3d3;
  border-radius: 5px;

  box-shadow: 0 0 1px rgba(0,0,0,.8);
  background-color: #fff;

  .top{
    width:100%;
    padding:15px 0 10px;
    border-bottom:1px solid #d3d3d3;

    .all{
      display: block;
      width: 75px;
      line-height: 26px;
      padding:2px 10px;
      margin-left:25px;
      border:1px solid #999;
      border-radius:5px;

      text-align: center;
      box-sizing: content-box;
    }
  }

  .list-wrap{
    width:100%;

    .item-wrap{
      display: flex;
      align-items:flex-start;
      padding:10px 20px;

      .left{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width:70px;
        height: 42px;
        padding-right:15px;
        border-right:1px solid #d3d3d3;

        box-sizing: content-box;

        .title{
          line-height: 23px;
          font-weight: 600;
        }

        .icon{
          display: block;
          width: 23px;
          height: 23px;

          background: url(${require('@/assets/img/icon.png')}) no-repeat 0 9999px;
        }

        .icon0{
          background-position: -20px -735px;
        }
        
        .icon1{
          background-position:0 -60px;
        }

        .icon2{
          background-position: 0 -88px;
        }

        .icon3{
          background-position: 0 -117px;
        }

        .icon4{
          background-position: 0 -141px;
        }
      }

      .right{
        flex:1;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        margin-left:15px;

        font-size: 12px;
        color:#333;

        .iten{
          line-height:21px;
          padding:0 10px;
          margin-top:12px;
          border-right:1px solid #e6e6e6;

          text-align: center;
          cursor: pointer;

          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
  }
`