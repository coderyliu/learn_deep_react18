import React, { memo, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";

import { GoodsDetailRightWrapper } from "./style";

const GoodsDetailRight = memo(() => {
  const [goodsCount, setGoodsCount] = useState(1);

  // ?redux相关
  const { goodsDetailInfo } = useSelector(
    (state) => ({
      goodsDetailInfo: state.detail.goodsDetailInfo,
    }),
    shallowEqual
  );

  // ?处理受控组件
  function handleGoodsCountChange(e) {
    setGoodsCount(e.target.value);
  }

  // ?处理- +按钮点击
  function handleCountBtnClick(type) {
    if (type === "sub") {
      setGoodsCount((prevCount) => --prevCount);
    } else {
      setGoodsCount((prevCount) => ++prevCount);
    }
  }

  // ?处理style-item的点击
  function handleStyleItemClick(e) {
    const childrenEl = e.currentTarget.children;

    for (let el of childrenEl) {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      }
    }

    e.target.parentElement.classList.add("active");
  }

  // todo 加入购物车操作
  const navigate=useNavigate()
  function handleAddCartClick(){
    const token=localStorage.getItem('token')

    if(!token){
      navigate('/login')
      return
    }

    
  }

  return (
    <GoodsDetailRightWrapper>
      <div className="goods-info">
        <h3 className="goods-name omit">{goodsDetailInfo?.name}</h3>
        <p className="goods-desc omit">{goodsDetailInfo?.desc}</p>
        <p className="goods-price">
          <span className="real-price">￥{goodsDetailInfo?.price}</span>
          <span className="old-price">￥{goodsDetailInfo?.oldPrice}</span>
        </p>
      </div>
      <div className="address-info"></div>
      <div className="rules-list">
        {goodsDetailInfo?.specs?.map((item) => {
          return (
            <div key={item.name} className="rules-list-item">
              <p className="style-name">{item.name}</p>
              <ul
                className="style-list"
                onClick={(e) => handleStyleItemClick(e)}
              >
                {item?.values?.map((iten) => {
                  return (
                    <li key={iten.name} className="style-list-item">
                      {iten.picture ? (
                        <img src={iten.picture} alt={iten.name} />
                      ) : (
                        <span className="style-text">{iten.name}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <div className="rules-list-item">
          <p className="style-name">数量</p>
          <p className="count-wrap">
            <span className="sub" onClick={() => handleCountBtnClick("sub")}>
              -
            </span>
            <input
              type="text"
              className="goods-count"
              value={goodsCount}
              onChange={(e) => handleGoodsCountChange(e)}
            />
            <span className="add" onClick={() => handleCountBtnClick("add")}>
              +
            </span>
          </p>
        </div>
        <div className="add-cart" onClick={()=>handleAddCartClick()}>加入购物车</div>
      </div>
    </GoodsDetailRightWrapper>
  );
});

export default GoodsDetailRight;
