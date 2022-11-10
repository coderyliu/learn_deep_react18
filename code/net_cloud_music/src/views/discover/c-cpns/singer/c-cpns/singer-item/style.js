import styled from 'styled-components'

export const SingerItemWrapper=styled.div`
  padding-left:15px;
  margin-top:15px;

  .bg_cover{
    position: relative;
    width:130px;
    height: 130px;
    padding:66.66% 0 0;
    overflow: hidden;

    img{
      position: absolute;
      z-index:99;
      left:0;
      top:0;
      width:100%;
      height: 100%;

      object-fit: cover;
      cursor: pointer;
    }
  }

  .info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:8px;

    .name{
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