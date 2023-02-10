import styled from "styled-components";

export const HomeListV2Wrapper=styled.div`
  .content-list{
    display: flex;
    
    width:100%;
    height: 610px;

    overflow:hidden;

    .left-cont{
      position: relative;
      width:240px;
      margin-right:10px;

      cursor:pointer;

      .covered{
        width:100%;
        height: 100%;

        img{
          width:100%;
          height: 100%;

          object-fit:cover; 
        }
      }

      .tip-wrap{
        position: absolute;
        z-index:99;
        top:50%;
        left:0;
        right:0;

        transform:translateY(-50%);

        color:#fff;
        font-size:18px;
        
        .subtitle{
          display: inline-block;
          width:76px;
          line-height: 66px;
          
          text-align:center;
          background-color: rgba(0,0,0,.9);
        }

        .welfare{
          display: inline-block;
          width:112px;
          line-height:66px;

          text-align:center;
          background-color:rgba(0,0,0,.7) ;
        }

        .take-thing{
          padding:10px 70px 0 100px;
        }
      }
    }

    .right-cont{
      flex:1;
      display: flex;
      flex-wrap:wrap;
      justify-content:flex-start;
      
      margin-right:-10px;
    }
  }
` 