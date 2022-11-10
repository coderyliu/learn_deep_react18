import styled from 'styled-components'

export const SingerIndicatorWrapper=styled.div`
  margin-top:15px;

  .indicator-wrap{
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .item{
      padding:3px 7px;

      font-size: 14px;
      font-weight: 600;
      color:#333;
      cursor: pointer;

      &:hover{
        text-decoration: underline;
      }

      &:last-of-type,
      &:first-of-type{
        font-weight: normal;
      }
    }

    .item.active{
      color:#fff;
      background-color:#c20c0c ;
    }
  }
` 