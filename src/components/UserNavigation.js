import React from "react";
import Wrapper from "../assets/wrappers/UserNavigation";
import { userLinks, adminLinks } from "../utils/links";
import { BsKeyFill } from "react-icons/bs";
import { HiLogout } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import { NavLink } from "react-router-dom";

const UserNavigation = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="menu menu--user">
        {userLinks.map((link) => {
          return (
            <div key={link.id} className="menu-item">
              <NavLink
                to={link.path}
                className={({ isActive }) => {
                  return isActive
                    ? "btn btn--text btn--active"
                    : "btn btn--text";
                }}
              >
                <span className="icon">{link.icon}</span>
                {link.text}
              </NavLink>
            </div>
          );
        })}
        <div className="menu-item">
          <button
            className="btn btn--text btn--logout"
            onClick={() => dispatch(logoutUser("Logging out..."))}
          >
            <span className="icon">
              <HiLogout />
            </span>
            log out
          </button>
        </div>
      </div>
      <hr />
      <div className="menu">
        <span className="admin">
          <BsKeyFill />
          admin
        </span>
        {adminLinks.map((link) => {
          return (
            <div key={link.id} className="menu-item">
              <NavLink
                to={link.path}
                className={({ isActive }) => {
                  return isActive
                    ? "btn btn--text btn--active"
                    : "btn btn--text";
                }}
              >
                <span className="icon">{link.icon}</span>
                {link.text}
              </NavLink>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default UserNavigation;
