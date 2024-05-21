import React from "react";

const CartItem = ({ product, addToOrders, addToWishList, removeFromCart }) => {
  const { id, image, title, price } = product;

  return (
    <li className="select-item flex flex-row items-center">
      <img className="select-item-image" src={image} alt={title} />
      <div className="ml-8 flex flex-col justify-center">
        <h3 className="select-item-title">{title}</h3>
        <p className="select-item-price">$ {price}</p>
        <div className="quantity-block flex flex-row items-center">
          <button className="add-quatity-btn">+</button>
          <p className="quantity-number">1</p>
          <button className="remove-quatity-btn">-</button>
        </div>
      </div>
      <div className="select-btn-container ml-auto flex flex-col justify-around items-center">
        <button
          className="select-item-order-btn"
          onClick={() => addToOrders(id)}
        >
          Place Order
        </button>
        <button
          className="select-item-save-btn"
          onClick={() => addToWishList(id)}
        >
          Save for Later
        </button>
        <button
          className="select-item-remove-btn"
          onClick={() => removeFromCart(id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default CartItem;
