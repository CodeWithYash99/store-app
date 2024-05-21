import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToOrders,
  addItemToWishList,
  removeItemFromCart,
} from "../redux/Features/productSlice";

import { IoMdCart } from "react-icons/io";
import Navbar from "./Navbar";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cartData);

  const addToOrdersBtn = (id) => {
    dispatch(addItemToOrders(id));
  }

  const addToWishListBtn = (id) => {
    dispatch(addItemToWishList(id));
  };

  const productRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <>
      <Navbar />
      <ul className="cart-data flex flex-col items-center">
        {cartData.length > 0 ? (
          <>
            {cartData &&
              cartData.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  addToOrders={addToOrdersBtn}
                  addToWishList={addToWishListBtn}
                  removeFromCart={productRemoveFromCart}
                />
              ))}
          </>
        ) : (
          <p className="no-product-data flex flex-row items-center mr-2">
            No Items in Cart
            <span>
              <IoMdCart className="ml-2" />
            </span>
          </p>
        )}
      </ul>
    </>
  );
};

export default Cart;
