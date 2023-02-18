import styled from "styled-components";

export const GoodsDetailLeftWrapper=styled.div`
  flex-basis:580px;
  padding:30px 50px;

  > .top-images{
    display: flex;
    align-items:flex-start;

    width:100%;

    > .covered{
      flex:1;
      background-color:rgb(245,245,245) ;

      > img{
        width:400px;
        height:400px;

        object-fit:cover;
        cursor: pointer;
      }
    }

    > .img-list{
      flex-basis:88px;
      padding-left:20px;

      .img-list-item{
        width:100%;
        height:68px;
        border:1px solid #e7e7e7;

        margin-bottom:10px;

        overflow: hidden;

        img{
          width:68px;
          height:68px;

          object-fit:cover;
          cursor:pointer;
        }
      }
    }
  }

  > .bottom-desc{
    display: flex;
    justify-content:flex-start;
    align-items:center;

    width:100%;
    height:140px;

    .bottom-desc-item{
      display: flex;
      flex-direction:column;
      align-items:center;

      width:100px;
      height: 80px;
      border-right:1px solid #e7e7e7;

      font-size:14px;

      &:last-of-type{
        border-right:none;
      }

      .desc-title{
        color:#999;
      }

      .desc-count{
        width:100%;
        margin:10px 0 0;

        text-align:center;
        color:#CF4444;
      }

      .brand{
        font-size:14px;
      }

      .desc-icon{
        display: flex;
        justify-content:space-between;
        align-items:center;

        margin-top:10px;
        
        color:#27ba9b;

        .icon-brand{
          display: inline-block;

          line-height:20px;
          font-size:20px;
          font-style:normal;
        }

        .icon-title{
          display: inline-block;
          line-height:20px;
          margin-left:3px;

          color:#333;
        }
      }
    }
  }
`