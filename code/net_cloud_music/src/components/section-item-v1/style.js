import styled from "styled-components";

export const SectionItemV1Wrapper=styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-left:-40px;

  .section-item{
    width:140px;
    height: 174px;
    padding:20px 0 10px 40px;
    
    box-sizing: content-box;

    .album{
      position: relative;
      height: 140px;
      padding:66.66% 0 0;
      overflow: hidden;

      img{
        position: absolute;
        z-index: 9;
        left:0;
        top:0;
        width:100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
      }

      .data{
        position: absolute;
        z-index:99;
        bottom:0;
        left:0;
        right:0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 20px;
        padding:2px 5px;

        color:#fff;
        font-size: 12px;

        background:url(${require('@/assets/img/sprite_cover.png')}) no-repeat 0 -537px;
        
        .play-count{
          display: flex;

          /* padding-left:20px; */

          span{
            display: block;
          }

          .count-icon{
            width:15px;
            margin-right:3px;

            cursor: pointer;
            background: url(${require('@/assets/img/sprite_icon.png')}) no-repeat 0 -20px;
          }
        }

        .play-icon{
          display: block;
          width:20px;
          height: 20px;

          cursor: pointer;
          background: url(${require('@/assets/img/sprite_icon.png')}) no-repeat 0 2px;
        }
      }
    }

    .name{
      cursor: pointer;

      &:hover{
        text-decoration: underline;
      }
    }
  }
`