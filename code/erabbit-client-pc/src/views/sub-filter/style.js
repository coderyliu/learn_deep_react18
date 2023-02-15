import styled from "styled-components";

export const SubFilterWrapper = styled.div `
  width:100%;
  padding-top: ${(props) => (props.isHavePadding ? 126 : 0)}px;

  background-color:#e7e7e7 ;

  > .sub-container{
    width:1240px;
    padding-bottom:30px;
    margin:0 auto;

    overflow: hidden;
  }
`