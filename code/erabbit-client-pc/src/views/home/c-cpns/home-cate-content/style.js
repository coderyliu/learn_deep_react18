import styled from "styled-components";

export const HomeCateContentWrapper = styled.div `
  position: absolute;
  z-index:99;
  top:${props=>props.isHavePadding?181:131}px;
  width:100%;
  height: 500px;
  
  .outer-wrap{
    display: flex;
    width:1240px;
    height: 100%;
    margin: 0 auto;

    .left-cont-wrap{
      width:110px;
      height: 100%;

      background-color:rgba(0,0,0,.8) ;

      > .item{
        display: flex;
        justify-content:space-between;
        align-items:center;
        
        width:80px;
        line-height:18px;
        padding:10px 10px 10px 20px;
        margin-top:5px;

        color:#fff;
        font-size:14px;

        box-sizing:content-box;

        &:hover{
          cursor:pointer;
          background-color: rgb(39,186,155);
        }

        &:first-of-type{
          margin-top:0;
        }

        .cate-name{
          font-size:16px;
        }
      }
    }

    .right-cont-wrap{
      display: none;
      flex:1;
      padding-left:10px;
    
      background-color:#e5e5e5 ;

      &.active{
        display: block;
      }

      > .top-cont{
        display: flex;
        justify-content:flex-start;
        align-items:center;

        width:100%;
        height: 100px;
        margin-left:10px;
        margin-top:15px;

        overflow: hidden;

        .iten{
          display: flex;
          flex-direction:column;
          align-items:center;

          width:100px;
          height: 100%;
          margin-right:20px;

          cursor:pointer;

          img{
            width: 65px;
            height: 65px;

            object-fit:cover;
          }

          > .name{
            width:100%;

            font-size:16px;
            color:#666;
            text-align:center;

            &:hover{
              text-decoration:underline;
            }
          }
        }
      }

      > .bottom-cont{
        display: flex;
        flex-wrap:wrap;
        justify-content:flex-start;
        align-items:center;

        width:100%;
        height: 380px;

        overflow:hidden;
      }
    }
  }
`