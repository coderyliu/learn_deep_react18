import styled from "styled-components";

export const ScrollViewWrapper = styled.div `
  position: relative;
  padding:8px 0;

  .control{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width:28px;
    height: 28px;

    border:2px solid #fff;
    border-radius: 50%;
    background-color: #fff;
    box-shadow:0px 1px 1px rgba(0,0,0,.14);

    cursor: pointer;
    z-index:99;

    &.left{
      left:0;
      top:50%;
      transform:translate(-50%,-50%);
    }

    &.right{
      right:0px;
      top:50%;
      transform:translate(50%,-50%);
    }
  }
  
  .scroll{
    overflow: hidden;

    .scroll-control{
      display: flex;
      transition:transform 250ms ease;
      margin:0 -8px;
    }
  }
`