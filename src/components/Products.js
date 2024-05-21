import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsData,
  addItemToCart,
  addItemToOrders,
} from "../redux/Features/productSlice";

import Navbar from "./Navbar";
import ProductItem from "./ProductItem";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  const searchData = useSelector((state) => state.randomSearchData);
  const productsData = useSelector((state) => state.productsData);

  const addToCartBtn = (id) => {
    dispatch(addItemToCart(id));
  };

  const addToOrdersBtn = (id) => {
    dispatch(addItemToOrders(id));
  };

  return (
    <div className="products-bg-container">
      <Navbar />
      {searchData.length === 0 ? (
        <ul className="products-data flex flex-row justify-around">
          {productsData?.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              addToCart={addToCartBtn}
              addToOrders={addToOrdersBtn}
            />
          ))}
        </ul>
      ) : (
        <ul className="products-data flex flex-row justify-around">
          {searchData[0].length === 0 ? (
            <p className="no-product-data">No Search Results!!!</p>
          ) : (
            <>
              {searchData?.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  addToCart={addToCartBtn}
                  addToOrders={addToOrdersBtn}
                />
              ))}
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default Products;
