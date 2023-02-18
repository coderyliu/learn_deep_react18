import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getCartList } from "@/api/modules/cart";
import { changeCartListAction } from "@/store/modules/cart";

import { CartWrapper } from "./style";

const Cart = memo(() => {
  // ?redux相关
  const { cartList } = useSelector(
    (state) => ({
      cartList: state.cart.cartList,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  // todo 请求购物车列表数据
  useEffect(() => {
    getCartList().then((res) => {
      dispatch(changeCartListAction(res.result));
    });
  }, [dispatch]);

  return (
    <CartWrapper>
      <h2>cart page</h2>
    </CartWrapper>
  );
});

export default Cart;
