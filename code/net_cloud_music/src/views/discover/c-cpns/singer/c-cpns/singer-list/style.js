import styled from 'styled-components'

export const SingerListWrapper = styled.div `
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top:20px;
  padding:20px 0;
  border-top:1px dashed #999;

  .singer-wrap{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width:130px;
    height: 30px;
    padding-left:15px;
    box-sizing: content-box;

    .name{
      margin-right:5px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;

      &:hover{
        text-decoration: underline;
      }
    }
    .icon{
      display: block;
      width: 17px;
      height: 18px;

      cursor: pointer;
      background: url(${require('@/assets/img/sprite_icon2.png')}) no-repeat 0 -740px;
    }
  }
`