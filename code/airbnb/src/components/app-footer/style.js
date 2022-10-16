import styled from 'styled-components'

export const FooterWrapper = styled.div `
  width:100%;
  height: 318px;
  margin-top:100px;
  border-top:1px solid #EBEBEB;

  box-sizing:border-box;

  .content-wrap{
    width:1080px;
    margin:0 auto;
    padding:48px 24px;

    .top{
      display: flex;
      justify-content: space-between;
      padding-bottom:30px;
      border-bottom:1px solid #EBEBEB;

      .title{
        margin-bottom:16px;
        font-weight: 700;
      }
      
      .item-wrap{
        flex:1;

        .item{
          .iten{
            margin-top:6px;
            color:#767676;
            cursor: pointer;
            &:hover{
              text-decoration:underline;
            }
          }
        }
      }
    }

    .bottom{
      .statement{
        padding:20px;
        color:#767676;
        text-align: center;
      }
    }
  }
`