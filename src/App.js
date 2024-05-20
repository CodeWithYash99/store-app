import React from "react";
import { Routes, Route } from "react-router-dom";

import Products from "./components/Products";
import WishList from "./components/WishList";
import Cart from "./components/Cart";
import Orders from "./components/Orders";

const App = () => {
  return (
    <div className="App-container">
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/wish-list" element={<WishList />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default App;
