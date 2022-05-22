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
    <Wrapper>
      <div>
        <Link className="btn logo" to="/">
          Lucky Paws
        </Link>
      </div>
      <div>
        <button className="btn" type="button">
          <HiOutlineHeart className="icon" />
        </button>
        <button className="btn" type="button">
          <HiOutlineUserCircle className="icon" />
        </button>
        <button className="btn" type="button">
          <HiOutlineShoppingBag className="icon" />
          <span className="cart">1</span>
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
