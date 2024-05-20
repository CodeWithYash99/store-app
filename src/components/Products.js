import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsData,
  addItemToCart,
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
  const cartData = useSelector((state) => state.cartData);

  const addToCartBtn = (id) => {
    const cartProductItem = productsData.find((product) => product.id === id);
    dispatch(addItemToCart(cartProductItem));
  };

  return (
    <>
      <Navbar />
      {searchData.length === 0 ? (
        <ul className="products-data flex flex-row justify-around">
          {productsData?.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              addToCart={addToCartBtn}
            />
          ))}
        </ul>
      ) : (
        <ul className="products-data flex flex-row justify-around">
          {searchData[0].length === 0 ? (
            <p className="no-product-data">No Search Results!!!</p>
          ) : (
            <>
              {searchData[0]?.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  addToCart={addToCartBtn}
                />
              ))}
            </>
          )}
        </ul>
      )}
    </>
  );
};

export default Products;
