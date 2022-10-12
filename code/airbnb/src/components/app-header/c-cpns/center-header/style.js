import styled from 'styled-components'

export const CenterHeaderWrapper=styled.div`
  .search-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 300px;
    height: 48px;
    padding:0 8px;
    box-sizing: border-box;
    border:1px solid #ddd;
    border-radius:24px;

    cursor:pointer;
    ${props=>props.theme.mixins.boxShadow};

    .text{
      padding:0 16px;
      color:${props=>props.theme.text.secondaryColor};
      font-weight: 600;
    }

    .icon{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius:50%;
      color:#fff;
      background-color: ${props=>props.theme.color.primaryColor};
    }
  }
`