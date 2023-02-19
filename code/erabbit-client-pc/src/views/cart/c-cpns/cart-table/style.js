import styled from "styled-components";

export const CartTableWrapper=styled.div`
  width:100%;

  background-color:#fff;

  .top-cart-head{
    display: flex;
    align-items:center;

    width:100%;
    height:71px;
    border-bottom:1px solid #e7e7e7;

    .cart-head-item{
      color:#666;
      font-size:16px;
      text-align:center;

      &:nth-of-type(1){
        flex-basis:120px;
      }

      &:nth-of-type(2){
        flex-basis:400px;
      }

      &:nth-of-type(3){
        flex-basis:200px;
      }

      &:nth-of-type(4){
        flex-basis:180px;
      }

      &:nth-of-type(5){
        flex-basis:180px;
      }

      &:nth-of-type(6){
        flex:1;
      }
    }
  }

  > .cart-table{
    width:100%;

    .cart-table-column{
      display: flex;
      align-items:center;
      width:100%;
      padding:10px 0;
      border-bottom:1px solid #e7e7e7;

      .select-status{
        flex-basis:120px;
      }

      .goods-sku{
        flex-basis:400px;
        display: flex;
        align-items:center;

        .left{
          flex:1;
          height:100px;

          > img{
            width: 100%;
            height:100%;

            object-fit:cover;
            cursor:pointer;
          }
        }

        .right{
          width:300px;
          margin-left:5px;

          color:#444;
          font-size:16px;
        }
      }

      > .price{
        flex-basis:200px;

        color:#666;
        font-size:16px;
        text-align:center;
      }

      .count-wrap{
        display: flex;
        justify-content:center;
        align-items:center;
        flex-basis:180px;
        
        .sub,.add{
          display: block;
          width: 28px;
          line-height:28px;
          border:1px solid #e7e7e7;

          text-align:center;
          font-size:14px;

          cursor: pointer;
          background-color:#eee;
        }

        .goods-count{
          width:60px;
          line-height:28px;
          border:1px solid #e7e7e7;
          border-left:none;
          border-right:none;

          font-size:14px;
          text-align:center;
        }
      }

      .total-price{
        flex-basis:180px;

        color:#CF4444;
        font-size:16px;
        text-align:center;
      }

      .operation{
        display: flex;
        justify-content:center;
        align-items:center;

        flex:1;

        font-size:14px;

        .delete{
          margin-left:10px;

          color:#27ba9b;

          cursor: pointer;
        }
      }
    }
  }
`