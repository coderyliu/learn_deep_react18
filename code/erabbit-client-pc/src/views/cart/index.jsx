import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getCartList } from "@/api/modules/cart";
import { getSameGoodsRecommend } from "@/api/modules/detail";
import {
  changeCartListAction,
  changeGuessFavoriteAction,
} from "@/store/modules/cart";

import AppBread from "@/components/common/app-bread";
import SameGoodsRecommend from "@/components/common/same-goods-recommend";
import CartTable from "./c-cpns/cart-table";
import { CartWrapper } from "./style";

const Cart = memo(() => {
  // ?redux相关
  const { isFixedHeader, cartList, guessFavorite } = useSelector(
    (state) => ({
      isFixedHeader: state.main.isFixedHeader,
      cartList: state.cart.cartList,
      guessFavorite: state.cart.guessFavorite,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  // todo 请求购物车列表数据 推荐数据
  useEffect(() => {
    getCartList().then((res) => {
      dispatch(changeCartListAction(res.result));
    });

    getSameGoodsRecommend("").then((res) => {
      const result = res.result;

      const dealArr = [];
      for (let i = 0; i < 4; i++) {
        dealArr[i] = result.slice(i * 4, (i + 1) * 4);
      }

      dispatch(changeGuessFavoriteAction(dealArr));
    });
  }, [dispatch]);

  return (
    <CartWrapper isHavePadding={isFixedHeader}>
      <div className="cart-wrapper">
        <AppBread></AppBread>
        <CartTable cartList={cartList}></CartTable>
        <SameGoodsRecommend
          recommendList={guessFavorite}
          title="猜你喜欢"
        ></SameGoodsRecommend>
      </div>
    </CartWrapper>
  );
});

export default Cart;
