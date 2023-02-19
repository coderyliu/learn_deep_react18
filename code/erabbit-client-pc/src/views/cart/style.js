import styled from "styled-components";

export const CartWrapper=styled.div`
  width:100%;
  padding-top: ${(props) => (props.isHavePadding ? 126 : 0)}px;
  padding-bottom:10px;

  background-color:#e7e7e7;

  .cart-wrapper{
    width:1240px;
    margin:0 auto;
  }
`