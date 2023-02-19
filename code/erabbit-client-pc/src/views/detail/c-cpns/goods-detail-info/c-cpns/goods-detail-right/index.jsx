import React, { memo, useEffect, useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";

import { addCartFetch, getCartList } from "@/api/modules/cart";
import { deepEqualObj } from "@/utils";
import { changeCartListAction } from "@/store/modules/cart";

import { GoodsDetailRightWrapper } from "./style";

const GoodsDetailRight = memo(() => {
  const [goodsCount, setGoodsCount] = useState(1);
  const [styleObj, setStyleObj] = useState({});
  const params = useParams();

  // ?使用全局提示组件
  const [messageApi, contextHolder] = message.useMessage();

  // ?redux相关
  const { goodsDetailInfo } = useSelector(
    (state) => ({
      goodsDetailInfo: state.detail.goodsDetailInfo,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

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
  function handleStyleItemClick(e, item) {
    const childrenEl = e.currentTarget.children;
    const styleCurrentObj = styleObj;
    const text = e.target?.alt || e.target.innerText;

    // todo 设置样式
    for (let el of childrenEl) {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      }
    }
    e.target.parentElement.classList.add("active");

    // todo 保存样式属性
    styleCurrentObj[item.name] = text;
    setStyleObj(styleCurrentObj);
  }

  // todo 加入购物车操作
  const navigate = useNavigate();
  function handleAddCartClick() {
    const token = localStorage.getItem("token");
    const skus = goodsDetailInfo?.skus;
    const currentLength = Object.keys(styleObj).length;
    if (currentLength !== goodsDetailInfo?.specs?.length)
      return messageApi.open({
        type: "warning",
        content: "请您选择正确的款式规格",
      });

    if (!token) {
      navigate("/login");
      return messageApi.open({
        type:'warning',
        content:'请您先登录'
      });
    }

    // todo 1.对象转化为数组
    const styleArr = Object.entries(styleObj);
    const newStyleArr = styleArr.map((data) => {
      const obj = {};
      obj["name"] = data[0];
      obj["valueName"] = data[1];

      return obj;
    });

    // todo 2.深度比较，找出skuId
    const skusArr = skus.filter((value) => {
      const equalArr = value.specs;

      return deepEqualObj.arraysEqualTwo(equalArr, newStyleArr);
    });

    if (!skusArr.length) return messageApi.open({
      type:'warning',
      content:'库存暂时没有,请时候关注'
    });

    // todo 3.发送网络请求
    addCartFetch(skusArr[0].id, goodsCount).then((res) => {
      if (res.code === "1") {
        messageApi.open({
          type: 'success',
          content: '添加购物车成功',
        });

        getCartList().then((res) => {
          dispatch(changeCartListAction(res.result));
        });
      }
    });
  }

  // ?置goodsCount的数量为1
  useEffect(() => {
    setGoodsCount(1);
    setStyleObj({});
  }, [params.id]);

  return (
    <GoodsDetailRightWrapper>
      {contextHolder}
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
                onClick={(e) => handleStyleItemClick(e, item)}
              >
                {item?.values?.map((iten) => {
                  return (
                    <li
                      key={iten.name}
                      className="style-list-item"
                      title={iten.name}
                    >
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
        <div className="add-cart" onClick={() => handleAddCartClick()}>
          加入购物车
        </div>
      </div>
    </GoodsDetailRightWrapper>
  );
});

export default GoodsDetailRight;
