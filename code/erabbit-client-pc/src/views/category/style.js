import styled from "styled-components";

export const CategoryWrapper=styled.div`
  width:100%;
  padding-top:${props=>props.isHavePadding?180:0}px;

  transition:all 0.2s linear
`