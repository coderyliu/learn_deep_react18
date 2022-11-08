import styled from 'styled-components'

export const NewDiskWrapper=styled.div`

  .slider-wrap{
    position: relative;
    margin:15px 0 20px;
    padding:15px 0;

    background-color: #f5f5f5;

    .control{
      position: absolute;
      top:50%;
      left:0;
      right:0;
      z-index:99;
      display: flex;
      justify-content: space-between;

      transform:translateY(-50%);

      .control-left,
      .control-right{
        width: 17px;
        height: 17px;

        background:url(${require('@/assets/img/sprite_02.png')}) no-repeat -260px -75px;

        cursor: pointer;
        &:hover{
          transform: scale(1.1);
        }
      }

      .control-right{
        background-position: -300px -75px;
      }
    }

    .slider{
      position: relative;
      height: 150px;

      overflow: hidden;

      .slider-inner{
        position: absolute;
        z-index:9;
        top:0;
        bottom:0;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;

        transition:all 300ms ease-in;
      }
    }
  }
`