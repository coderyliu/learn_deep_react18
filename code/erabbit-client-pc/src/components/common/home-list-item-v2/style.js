import styled from "styled-components";

export const HomeListItemV2Wrapper = styled.div `
  position:relative;
  width:240px;
  height:302px;
  border:1px solid transparent;
  padding:10px 30px;
  margin-right:10px;

  transition:all 0.5s ease;
  animation:riseHeight 0.5s linear;
  box-sizing:border-box;

  &:hover{
    border-color:rgb(39,186,155);
  }

  &:hover .bottom-tip{
    display: block;
  }

  .picture{
    width:100%;
    height: 160px;

    img{
      display: block;
      width: 160px;
      height: 160px;
      margin:0 auto;

      object-fit:cover;
      cursor:pointer;
    }
  }

  > .content{
    width:100%;

    font-size:22px;
    text-align:left;

    .name{
      height: 44px;
      margin-top:6px;

      font-size:16px;
    }

    .price{
      margin-top:10px;

      font-size:18px;
      color:#cf4444;
    }

    .desc{
      height: 22px;
      margin-top:6px;

      color:#666;
      font-size:16px;
    }
  }

  .bottom-tip{
    display: none;
    position:absolute;
    z-index:99;
    top:220px;
    right:0;
    bottom:0;
    left:0;

    padding:10px 55px;

    color:#fff;
    font-size:14px;
    text-align:center;

    cursor:pointer;
    background-color:rgb(39,186,155);

    .find-more{
      border-bottom:1px solid #fff;
      padding-bottom:8px;
      margin-bottom:5px;

      font-size:18px;
    }
  }

  @keyframes riseHeight{
    from {
      height:0;
    }

    to{
     height:80px;
    }
  }
`