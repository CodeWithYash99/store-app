import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, removeItemFromWishList } from "../redux/Features/productSlice";

import Navbar from "./Navbar";

const WishList = () => {
  const dispatch = useDispatch();
  const wishListData = useSelector((state) => state.wishListData);

  const productRemoveFromCart = (id) => {
    dispatch(removeItemFromWishList(id));
  };

  const productRemoveFromWishList = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <>
      <Navbar />
      <ul className="wish-list-data flex flex-col items-center">
        {wishListData.length > 0 ? (
          <>
            {wishListData &&
              wishListData.map((product) => (
                <li
                  className="select-item flex flex-row items-center"
                  key={product.id}
                >
                  <img
                    className="select-item-image"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="ml-8 flex flex-col justify-center">
                    <h3 className="select-item-title">{product.title}</h3>
                    <p className="select-item-price">$ {product.price}</p>
                    <div className="quantity-block flex flex-row items-center">
                      <button className="add-quatity-btn">+</button>
                      <p className="quantity-number">1</p>
                      <button className="remove-quatity-btn">-</button>
                    </div>
                  </div>
                  <div className="select-btn-container ml-auto flex flex-col justify-around items-center">
                    <button
                      className="select-item-cart-btn"
                      onClick={() => productRemoveFromCart(product.id)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="select-item-remove-btn"
                      onClick={() => productRemoveFromWishList(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
          </>
        ) : (
          <p className="no-product-data flex flex-row items-center mr-2">
            No Items in Wishlist.
          </p>
        )}
      </ul>
    </>
  );
};

export default WishList;
