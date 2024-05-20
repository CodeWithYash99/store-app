import React from "react";

const CartItem = ({ product }) => {
  const { image, title, price } = product;

  return (
    <li className="cart-item flex flex-row items-center">
      <img className="cart-item-image" src={image} alt={title} />
      <div className="ml-8 flex flex-col justify-center">
        <h3 className="cart-item-title">{title}</h3>
        <p className="cart-item-price">$ {price}</p>
        <div className="quantity-block flex flex-row items-center">
          <button className="add-quatity-btn">+</button>
          <p className="quantity-number">1</p>
          <button className="remove-quatity-btn">-</button>
        </div>
      </div>
      <div className="cart-order-remove-btn ml-auto flex flex-col justify-around items-center">
        <button className="cart-item-order-btn">Order Now</button>
        <button className="cart-item-save-btn">Save for Later</button>
        <button className="cart-item-remove-btn">Remove</button>
      </div>
    </li>
  );
};

export default CartItem;
