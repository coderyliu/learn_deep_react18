import styled from "styled-components";

export const FilterGoodsContainerWrapper=styled.div`
  width:100%;
  margin-top:25px;

  background-color:#fff ;

  .top-filter-wrap{
    display: flex;
    align-items:center;
    width:1190px;
    height: 80px;
    margin:0 auto;

    .left-filter{
      flex:1;
      display: flex;
      align-items:center;

      height: 100%;

      .left-filter-item{
        width:90px;
        line-height:30px;
        margin-right:20px;
        border:1px solid #e7e7e7;

        color:#999;
        font-size:14px;
        text-align:center;

        cursor:pointer;
        &.active{
          color:#fff;

          background-color:#27ba9b ;
        }
      }
    }

    .right-filter{
      display: flex;
      align-items:center;

      height:100%;

      .right-filter-item{
        line-height:30px;
        margin-right:20px;

        color:#999;
        font-size:14px;
        text-align:center;

        > label{
          display: flex;
          align-items:center;

          height:100%;  

          cursor: pointer;
        }

        input{
          display: inline-block;
          width:16px;
          height: 16px;
          line-height:30px;
          margin-right:5px;
        }
      }
    }
  }

  .goods-list-wrap{
    display: flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:flex-start;

    width:1190px;
    margin:0 auto;
    padding-top:50px;

  }

  .pagination{
    display: flex;
    justify-content:center;
    align-items:center;

    width:1190px;
    margin:0 auto;
    padding-top:30px;
    padding-bottom:30px;

    .ant-pagination-options{
      display: none;
    }
  }
`