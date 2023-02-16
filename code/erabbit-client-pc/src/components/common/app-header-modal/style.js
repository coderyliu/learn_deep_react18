import styled from "styled-components";

export const AppHeaderModalWrapper = styled.div `
  position:${props=>props.isFixedLayout?'fixed':'static'};
  z-index:598;
  top:${props=>props.isFixedHeader?60:150}px;
  left:50%;

  transform:${props=>props.isFixedLayout?'translateX(-50%)':''};

  width:1240px;
  margin:0 auto;

  background-color:#fff ;

  > .header-top{
    width:100%;
    line-height:100px;

    color:#666;
    font-size:28px;
    text-align:center;
  }

  > .total-cate{
    display: flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:flex-start;

    width:100%;
    height:160px;
    padding:0 32px 20px;

    overflow:hidden;

    .total-cate-item{
      display: flex;
      flex-direction:column;
      align-items:center;

      width:140px;
      height:100%;
      margin-top:10px;
      margin-right:20px;

      > img{
        width:100px;
        height: 100px;

        object-fit:cover;
        cursor:pointer;
      }

      > .item-name{
        color:#333;
        font-size:16px;

        cursor:pointer;
      }
    }
  }
`