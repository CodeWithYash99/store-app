import React from "react";

const ProductItem = ({ product, addToCart, addToOrders }) => {
  const { id, image, title, price, rating } = product;
  const { rate, count } = rating;

  return (
    <li className="product-item flex flex-col items-center">
      <img src={image} alt={title} className="product-img" />
      <h3 className="product-title text-center">{title}</h3>
      <p className="product-price text-center">${price}</p>
      <div className="product-rating-container flex flex-row justify-around">
        <p className="product-rating text-center">Rating: {rate}</p>
        <p className="product-rating-count text-center">
          Reviewed: {count} Customers
        </p>
      </div>
      <div className="cart-order-button-container flex flex-col justify-between items-center mt-auto">
        <button className="btn product-cart-btn" onClick={() => addToCart(id)}>
          Add to Cart
        </button>
        <button
          className="btn product-order-btn text-center"
          onClick={() => addToOrders(id)}
        >
          ORDER NOW
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
