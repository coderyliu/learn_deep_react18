import styled from "styled-components";

export const GoodsDetailRightWrapper = styled.div `
  flex:1;
  display: flex;
  flex-direction:column;
  align-items:flex-start;

  padding:30px 0;

  > .goods-info{
    width:100%;

    .goods-desc{
      width:100%;
      margin:10px 0;

      color:#999;
      font-size:16px;
    }

    .goods-price{
      text-align:baseline;

      .real-price{
        color:#CF4444;
        font-size:18px;
      }

      .old-price{
        margin-left:10px;

        color:#999;
        font-size:16px;

        text-decoration:line-through;
      }
    }
  }

  > .rules-list{
    display: flex;
    flex-direction:column;
    align-items:flex-start;

    width:100%;

    .rules-list-item{
      display: flex;
      align-items:flex-start;
      width:100%;
      margin-top:20px;

      .style-name{
        flex-basis:50px;

        color:#999;
        font-size:16px;
      }

      .style-list{
        flex:1;
        display: flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:flex-start;

        .style-list-item{
          padding:5px 10px;
          margin-right:10px;
          margin-bottom:10px;
          border:1px solid #e7e7e7;

          &.active{
            border-color:#27ba9b;
          }

          img{
            width:50px;
            height: 50px;

            object-fit:cover;
            cursor: pointer;
          }

          .style-text{
            display: block;
            width:100%;
            height:100%;
            font-size:14px;

            cursor: pointer;
            user-select:none;
          }
        }
      }

      > .count-wrap{
        display: flex;
        align-items:center;
        border:1px solid #e7e7e7;

        .sub,.add{
          display: block;
          width:28px;
          line-height:28px;

          color:#666;
          text-align:center;

          cursor: pointer;
          user-select:none;
          background-color:#eee;
        }

        .goods-count{
          width:50px;
          padding:0 5px;

          border:none;
          outline:none;

          font-size:14px;
          text-align:center;
        }
      }
    }
  }

  .add-cart{
    width:166px;
    line-height:46px;
    margin-top:20px;
    border-radius:5px;

    color:#fff;
    font-size:16px;
    text-align:center;

    cursor: pointer;
    background-color:#27ba9b ;
  }
`