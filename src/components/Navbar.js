import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUserCircle,
  HiOutlineHeart,
  HiOutlineShoppingBag,
} from "../utils/icons";
import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  const { totalQuantity } = useSelector((store) => store.cart);
  return (
    <Wrapper className="container--max">
      <div>
        <Link className="btn logo" to="/">
          Lucky Paws
        </Link>
      </div>
      <nav className="btns-container">
        <button aria-label="favorites" className="btn" type="button">
          <HiOutlineHeart className="icon" />
        </button>
        <Link aria-label="account" to="account/" className="btn">
          <HiOutlineUserCircle className="icon" />
        </Link>
        <Link aria-label="cart" to="cart" className="btn">
          <HiOutlineShoppingBag className="icon" />
          <span className="cart">{totalQuantity}</span>
        </Link>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
