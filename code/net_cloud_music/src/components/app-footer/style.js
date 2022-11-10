import styled from 'styled-components'

export const AppFooterWrapper = styled.div `
  width:100%;
  height: 326px;
  border-top:1px solid #d3d3d3;

  background-color: #f5f5f5;
  .footer-inner{
    width:980px;
    margin:0 auto;

    .top_icon{
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top:30px;

      .item{
        height: 72px;
        padding:0 20px;

        
        a{
          position: relative;
          display: block;
          width: 100px;
          height: 100px;

          cursor: pointer;
          background: url(${require('@/assets/img/foot_enter_new2.png')}) no-repeat 220px 220px;
          transform: scale(0.6);

          &:hover{
            color:#333;
          }
        }
        
        .text{
          position: absolute;
          bottom:-25px;
          left:0;
          right:0;

          font-size: 16px;
          color:#666;
          text-align: center;

          transform: scale(1.2);

          &:hover{
            cursor: pointer;
            text-decoration: underline;
          }
        }

        .music{
          background-position: -340px -5px;
        }

        .cloud{
          background-position: -10px -335px;
        }

        .studio{
          background-position: -5px -120px;
        }

        .user{
          background-position: -120px -120px;
        }

        .player{
          background-position: -220px -230px;
        }

        .pay{
          background-position: -340px -230px;
        }

        .video{
          background-position: -340px -120px;
        }
      }
    }

    .bottom-info{
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-top:50px;
      .suggest{
        display: flex;
        align-items: center;

        .item{
          margin-right:20px;

          a{
            font-size:12px;
            color: #333;
          }

          &:hover{
            cursor:pointer;
            text-decoration: underline;
          }
        } 
      }

      .info-website{
        padding:5px 0 5px;
        font-size: 12px;
      }
    }
  }
`