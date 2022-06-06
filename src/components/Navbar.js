import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUserCircle,
  HiOutlineHeart,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  const { totalAmount } = useSelector((store) => store.cart);
  return (
    <Wrapper className="container--max">
      <div>
        <Link className="btn logo" to="/">
          Lucky Paws
        </Link>
      </div>
      <div className="btns-container">
        <button className="btn" type="button">
          <HiOutlineHeart className="icon" />
        </button>
        <Link to="account/" className="btn">
          <HiOutlineUserCircle className="icon" />
        </Link>
        <Link to="cart" className="btn">
          <HiOutlineShoppingBag className="icon" />
          <span className="cart">{totalAmount}</span>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Navbar;
