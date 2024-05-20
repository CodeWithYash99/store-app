import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  productSearch,
  addRandomSearchData,
  clearRandomSearchData,
} from "../redux/Features/productSlice";

import { IoMdHome, IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";

const navbarItems = [
  { id: 1, title: "Home", icon: <IoMdHome />, path: "/" },
  { id: 2, title: "Wishlist", icon: <FaHeart />, path: "/wish-list" },
  { id: 3, title: "Cart", icon: <IoMdCart />, path: "/cart" },
  { id: 4, title: "Orders", icon: <MdLocalShipping />, path: "/orders" },
];

const Navbar = () => {
  const dispatch = useDispatch();

  const search = useSelector((state) => state.search);
  const productsData = useSelector((state) => state.productsData);

  const onSubmitSearch = (e) => {
    e.preventDefault();

    const fill = productsData.filter((product) => product.title.toLowerCase().startsWith(search))
    dispatch(addRandomSearchData(fill));
  };
  
  if (search.length === 0) {
    dispatch(productSearch(""));
    dispatch(clearRandomSearchData());
  }

  const onChangeSearch = (e) => {
    dispatch(productSearch(e.target.value.toLowerCase()));
  };

  return (
    <div className="navbar-bg-container">
      <h1 className="app-title">STORE</h1>

      <form className="input-container" onSubmit={onSubmitSearch}>
        <input
          type="text"
          placeholder="Search here..."
          className="search-input"
          value={search}
          onChange={onChangeSearch}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>

      <ul className="nav-items">
        {navbarItems.map((tab) => (
          <li className="nav-item flex flex-row items-center" key={tab.id}>
            {tab.icon}
            <Link to={tab.path} className="ml-2">
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
