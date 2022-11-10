import styled from 'styled-components'

export const SingerCategoryWrapper = styled.div `
  .inner-cont{
    .item{
      margin-top:10px;
      border-bottom:1px solid #d3d3d3;

      &:last-of-type{
        border:none;
      }

      .title{
        padding-left:5px;
        font-size: 16px;
        font-weight: 600;
      }

      .category{
        padding:8px 5px;

        .section{
          padding:5px 5px;

          color: #666;
          font-size: 12px;
          list-style: inside;
          list-style-type: square;
          
          cursor: pointer;
          &:hover{
            text-decoration: underline;
          }
        }

        .section.active{
          color:#c20c0c;
          background-color: hsl(0, 0%, 90%);
        }
      }
    }
  }
`