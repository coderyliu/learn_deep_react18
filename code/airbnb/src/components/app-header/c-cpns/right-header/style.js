import styled from 'styled-components'

export const RightHeaderWrapper = styled.div `
  flex:1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: ${props=>props.theme.text.primaryColor};
  font-weight: 600;

  .btns{
    display: flex;
    align-items: center;
    box-sizing: content-box;

    .btn{
      height:18px;
      line-height:18px;
      padding:12px 15px;
      cursor:pointer;
      border-radius:22px;
      box-sizing: content-box;

      &:hover{
        background-color: #f5f5f5;
      }
    }
  }

  .profile{
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width:77px;
    height: 42px;

    margin-right:24px;
    border:1px solid #eee;
    border-radius:25px;

    box-sizing: border-box;
    cursor: pointer;

    ${props=>props.theme.mixins.boxShadow};

    .panel{
      position: absolute;
      top:54px;
      right:0;
      width:240px;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0,0,0,.2);
      background-color:#fff;
      color:#666;

      z-index:999;

      .top,.bottom{
        padding:10px 0;

        .item{
          height: 40px;
          line-height:40px;
          padding:0 16px;

          &:hover{
            background-color:#f5f5f5;
          }
        }
      }

      .top{
        border-bottom:1px solid #ddd;
      }
    }
  }
`