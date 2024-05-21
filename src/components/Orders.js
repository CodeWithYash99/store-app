import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromOrders } from "../redux/Features/productSlice";

import Navbar from "./Navbar";

const Orders = () => {
  const dispatch = useDispatch();
  const ordersData = useSelector((state) => state.ordersData);

  const productRemoveFromOrders = (id) => {
    dispatch(removeItemFromOrders(id));
  };

  return (
    <>
      <Navbar />
      <ul className="orders-data flex flex-col items-center">
        {ordersData.length > 0 ? (
          <>
            {ordersData &&
              ordersData.map((product) => (
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
                      className="select-item-order-btn"
                      onClick={() => ""}
                    >
                      Order Now
                    </button>
                    <button
                      className="select-item-remove-btn"
                      onClick={() => productRemoveFromOrders(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
          </>
        ) : (
          <p className="no-product-data flex flex-row items-center mr-2">
            No Items in Orders.
          </p>
        )}
      </ul>
    </>
  );
};

export default Orders;
