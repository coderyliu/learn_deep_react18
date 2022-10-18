import styled from "styled-components";

export const SectionTabsWrapper=styled.div`
  .item{
    flex-basis: 120px;
    flex-shrink: 0;
    padding:8px 16px;
    margin-right:16px;
    border:0.5px solid #d8d8d8;
    border-radius: 3px;

    font-size: 17px;
    text-align: center;
    white-space: nowrap;
    
    cursor: pointer;
    box-sizing: border-box;

    ${props=>props.theme.mixins.boxShadow};

    &:last-child{
      margin-right:0;
    }

    &.active{
      color:#fff;
      background-color: ${props=>props.theme.color.secondaryColor};
    }
  }
`