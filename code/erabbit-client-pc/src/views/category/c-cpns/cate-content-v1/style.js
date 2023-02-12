import styled from "styled-components"

export const CateContentV1Wrapper = styled.div `
  width:100%;
  padding:20px 0;

  background-color:#f5f5f5 ;

  .content-outer{
    width:100%;
    height: 457px;

    margin:20px 0 0;

    &:first-of-type{
      margin-top:0;
    }
    
    .content-inner{
      width:1240px;
      margin:0 auto;

      background-color:#fff ;
    }
  }
`