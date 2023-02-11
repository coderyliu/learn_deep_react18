import styled from "styled-components";

export const HomeListItemV1Wrapper = styled.div `
  width:306px;
  height:100%;
  margin-right:4px;

  transition:all 0.4s ease;
  box-sizing:border-box;
  cursor:pointer;

  &:hover{
    box-shadow:5px 5px 10px rgba(0,0,0,.1);
    transform:translateY(-5px);
  }

  > .picture{
    width:100%;
    height: 306px;

    img{
      /* width: 100%; */
      height: 100%;
      object-fit:cover;
    }
  }

  > .descriptions{
    width:100%;
    padding-bottom:20px;

    font-size:22px;
    text-align:center;

    background-color:#f0f9f4;

    .desc-cont,.desc-price,.desc-alt{
      height: 30px;
      padding-top:12px;

      box-sizing:content-box;
    }

    .desc-cont{
      padding-left:30px;
      padding-right:30px;
    }

    .desc-price{
      color:#cf4444;
    }

    .desc-alt{
      color:#999;
      font-size:18px;
    }
  }
`