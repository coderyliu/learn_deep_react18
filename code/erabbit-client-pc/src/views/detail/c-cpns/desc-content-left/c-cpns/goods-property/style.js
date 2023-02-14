import styled from "styled-components";

export const GoodsPropertyWrapper=styled.div`
  width: 860px;
  margin:0 auto;

  padding-top:20px;

  .top-property{
    display: flex;
    flex-wrap:wrap;

    width:100%;

    .property-item{
      display: flex;
      align-items:flex-start;
      width:50%;
      margin-top:10px;

      > .property-name{
        width:80px;

        font-size:14px;
        color:#999;
      }

      .property-value{
        flex:1;
        margin-left:10px;

        font-size:14px;
        color:#666;
        text-align:left;
      }
    }
  }

  .bottom-img-list{
    display: flex;
    flex-direction:column;
    align-items:center;

    margin-top:20px;

    .img-item{
      width: 100%;

      img{
        width: 100%;

        object-fit:cover;
      }
    }
  }
`