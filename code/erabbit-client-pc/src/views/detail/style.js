import styled from "styled-components";

export const DetailWrapper=styled.div`
  width:100%;
  padding-top:${props=>props.isHavePadding?126:0}px;
  padding-bottom:20px;
  
  background-color:#e7e7e7 ;
  overflow: hidden;

  > .content-wrap{
    width:1240px;
    margin:0 auto; 
  }
`