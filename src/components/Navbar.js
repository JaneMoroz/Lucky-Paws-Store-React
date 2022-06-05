import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUserCircle,
  HiOutlineHeart,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
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
        <Link to="/account/" className="btn">
          <HiOutlineUserCircle className="icon" />
        </Link>
        <button className="btn" type="button">
          <HiOutlineShoppingBag className="icon" />
          <span className="cart">1</span>
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
