import PropTypes from "prop-types";
import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { message } from "antd";

import {
  deleteCartFetch,
  getCartList,
  updateCartFetch,
} from "@/api/modules/cart";
import { cartTableColumns } from "@/common";

import { CartTableWrapper } from "./style";
import { changeCartListAction } from "@/store/modules/cart";

const CartTable = memo((props) => {
  const { cartList } = props;
  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useDispatch();

  // ?修改商品的选中状态
  function handleChangeStatus(e, data) {
    updateCartFetch(data.skuId, e.target.checked, data.count).then((res) => {
      if (res.code === "1") {
        messageApi.open({
          type: "success",
          content: "操作成功",
        });

        getCartList().then((res) => {
          dispatch(changeCartListAction(res.result));
        });
      } else {
        return messageApi.open({
          type: "error",
          content: "网络繁忙，请稍后再试",
        });
      }
    });
  }

  // ?修改商品数量
  function handleChangeCount(type, data) {
    let count = data.count;
    let selected = data.selected;

    if (type === "sub") {
      count -= 1;
    } else {
      count += 1;
    }
    updateCartFetch(data.skuId, selected, count).then((res) => {
      if (res.code === "1") {
        messageApi.open({
          type: "success",
          content: "操作成功",
        });

        getCartList().then((res) => {
          dispatch(changeCartListAction(res.result));
        });
      } else {
        return messageApi.open({
          type: "error",
          content: "网络繁忙，请稍后再试",
        });
      }
    });
  }

  // ?删除购物车中的某一项数据
  function handleDeleteGoodsItem(data) {
    deleteCartFetch(data.skuId).then((res) => {
      if (res.code === "1") {
        messageApi.open({
          type: "success",
          content: "操作成功",
        });

        getCartList().then((res) => {
          dispatch(changeCartListAction(res.result));
        });
      } else {
        return messageApi.open({
          type: "error",
          content: "网络繁忙，请稍后再试",
        });
      }
    });
  }

  return (
    <CartTableWrapper>
      {contextHolder}
      <ul className="top-cart-head">
        {cartTableColumns?.map((title) => {
          return (
            <li key={title} className="cart-head-item">
              {title}
            </li>
          );
        })}
      </ul>
      <div className="cart-table">
        {cartList?.map((data) => {
          return (
            <div className="cart-table-column" key={data.id}>
              <input
                type="checkbox"
                value={data.selected}
                onChange={(e) => handleChangeStatus(e, data)}
                name="status"
                className="select-status"
              />
              <div className="goods-sku">
                <div className="left">
                  <img src={data.picture} alt="" />
                </div>
                <div className="right">
                  <p className="goods-name omit">{data.name}</p>
                </div>
              </div>
              <p className="price">￥{Number(data.nowPrice).toFixed(2)}</p>
              <div className="count-wrap">
                <span
                  className="sub"
                  onClick={() => handleChangeCount("sub", data)}
                >
                  -
                </span>
                <span className="goods-count">{data.count}</span>
                <span
                  className="add"
                  onClick={() => handleChangeCount("add", data)}
                >
                  +
                </span>
              </div>
              <p className="total-price">
                ￥{(Number(data.nowPrice) * data.count).toFixed(2)}
              </p>
              <div className="operation">
                <span className="collect">收藏</span>
                <span
                  className="delete"
                  onClick={() => handleDeleteGoodsItem(data)}
                >
                  删除
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="operator-wrap">
      </div>
    </CartTableWrapper>
  );
});

CartTable.propTypes = {
  cartList: PropTypes.array,
};

export default CartTable;
