import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  productSearch,
  addRandomSearchData,
  clearRandomSearchData,
} from "../../redux/Features/productSlice";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHome, IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";

import "./index.css";

const navbarItems = [
  { id: 1, title: "Home", icon: <IoMdHome />, path: "/store-app", count: "" },
  {
    id: 2,
    title: "Wishlist",
    icon: <FaHeart />,
    path: "/wish-list",
    count: "",
  },
  { id: 3, title: "Cart", icon: <IoMdCart />, path: "/cart", count: 0 },
  {
    id: 4,
    title: "Orders",
    icon: <MdLocalShipping />,
    path: "/orders",
    count: "",
  },
];

const Navbar = () => {
  const dispatch = useDispatch();

  const search = useSelector((state) => state.search);
  const productsData = useSelector((state) => state.productsData);
  const cartDataCount = useSelector((state) => state.cartData).length;

  const onSubmitSearch = (e) => {
    e.preventDefault();

    const fill = productsData.filter((product) =>
      product.title.toLowerCase().startsWith(search)
    );
    dispatch(addRandomSearchData(...fill));
  };

  if (search.length === 0) {
    dispatch(productSearch(""));
    dispatch(clearRandomSearchData());
  }

  const onChangeSearch = (e) => {
    dispatch(productSearch(e.target.value.toLowerCase()));
  };

  return (
    <nav className="navbar-bg-container flex flex-row justify-between items-center">
      <h1 className="app-logo">STORE</h1>

      <form
        className="input-container flex flex-row justify-around items-center"
        onSubmit={onSubmitSearch}
      >
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

      <div className="small-navbar flex flex-col items-center">
        <input className="menu-check-box" type="checkbox" id="hamburger" />
        <label className="hamburger-icon" htmlFor="hamburger">
          <GiHamburgerMenu />
        </label>

        <div className="small-nav-container flex flex-col items-center">
          <form
            className="small-form-container flex flex-col items-center"
            onSubmit={onSubmitSearch}
          >
            <input
              type="text"
              placeholder="Search here..."
              className="small-search-input"
              value={search}
              onChange={onChangeSearch}
            />
            <button className="small-search-btn" type="submit">
              Go
            </button>
          </form>

          <ul className="small-menu flex flex-col justify-around">
            {navbarItems.map((tab) => (
              <li key={tab.id} className="flex flex-row items-center">
                  {tab.icon}
                <Link to={tab.path} className="flex flex-row items-center ml-2">
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="nav-container flex flex-row justify-around">
        {navbarItems.map((tab) => (
          <li className={`nav-item flex flex-row items-center`} key={tab.id}>
            {tab.icon}
            <Link to={tab.path} className="ml-2">
              {tab.title}
            </Link>
            {cartDataCount > 0 && tab.title === "Cart" ? (
              <p className="cart-count ml-2.5">{cartDataCount}</p>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
