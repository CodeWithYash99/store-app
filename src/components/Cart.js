import React from "react";
import { useSelector } from "react-redux";

import { IoMdCart } from "react-icons/io";

import Navbar from "./Navbar";
import CartItem from "./CartItem";

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);

  return (
    <>
      <Navbar />
      <ul className="cart-bg-container flex flex-col items-center">
        {cartData.length > 0 ? (
          <>
            {cartData &&
              cartData.map((product) => (
                <CartItem key={product.id} product={product} />
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
