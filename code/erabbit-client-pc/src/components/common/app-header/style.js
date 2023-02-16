import styled from "styled-components";

export const AppHeaderWrapper = styled.div `
  width: 100%;
  height: ${(props) => (props.headerHeight ? 80 : 132)}px;
  border: 1px solid #e4e4e4;

  box-sizing: border-box;
  background-color: #fff;
  transition: all 0.4s linear;

  position: ${(props) => (props.headerHeight ? "fixed" : "static")};
  z-index: 999;
  left: 0;
  top: 0;
  right: 0;

  /* 这种方案不行，会有覆盖图层 */
  /* > .covered{
    position: fixed;
    z-index:598;
    top:${(props) => (props.headerHeight ? 20 : 102)}px;
    left:50%;

    transform:translateX(-50%);

    width:1240px;
    height:180px;

    background-color:transparent ;
  } */

  .app-header-wrap {
    display: flex;
    align-items: center;

    width: 1240px;
    height: 100%;
    margin: 0 auto;

    .head-left {
      flex: 1;
      display: flex;
      align-items: center;

      height: 100%;

      .app-logo {
        width: 200px;
        height: 100%;
        margin-right: 40px;

        text-indent: -9999px;
        cursor: pointer;
        background: url(${require("@/assets/imgs/logo.png")}) no-repeat center
          ${(props) => (props.headerHeight ? 1 : 18)}px / contain;
      }

      .head-list {
        flex: 1;
        display: flex;
        align-items: center;

        box-sizing: content-box;

        > .item {
          line-height: 32px;
          margin-right: 40px;

          font-size: 16px;

          box-sizing: content-box;

          &:hover {
            color: rgb(39, 186, 155);

            border-bottom: 1px solid rgb(39, 186, 155);
          }

          &.active{
            color: rgb(39, 186, 155);

            border-bottom: 1px solid rgb(39, 186, 155);
          }
        }
      }
    }

    .head-right {
      display: flex;
      align-items: center;

      width: 220px;
      height: 100%;

      box-sizing: content-box;

      > .left {
        flex: 1;
        display: flex;
        align-items: center;
        height: 32px;
        padding: 5px 10px;
        border: 1px solid #e7e7e7;
        border-radius: 15px;

        box-sizing: border-box;

        .search {
          width: 125px;
          line-height: 20px;
          border: none;
          outline: none;

          font-size: 12px;
          color: #666;

          box-sizing: content-box;
        }

        .anticon-search {
          cursor: pointer;
          color: #555;
        }
      }

      > .right {
        width: 50px;
        margin-left: 10px;

        .anticon-shopping-cart {
          font-size: 20px;
          color: #555;

          cursor: pointer;
        }
      }

      > .brand,
      .special {
        line-height: 32px;
        margin-right: 40px;
  
        font-size: 16px;
  
        box-sizing: content-box;
  
        &:hover {
          color: rgb(39, 186, 155);
  
          border-bottom: 1px solid rgb(39, 186, 155);
        }
      }

      > .gap{
        margin-left:-50px;
        margin-right:40px;
        color:rgb(39,186,155);
      }
    }

  }
`;