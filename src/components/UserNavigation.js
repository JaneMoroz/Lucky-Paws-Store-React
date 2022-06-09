import React from "react";
import Wrapper from "../assets/wrappers/UserNavigation";
import { userLinks, adminLinks } from "../utils/links";
import { BsKeyFill } from "react-icons/bs";
import { HiLogout } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import { Link, NavLink } from "react-router-dom";

const UserNavigation = () => {
  const { user } = useSelector((store) => store.user);
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
                  return isActive ? "btn btn--text active" : "btn btn--text";
                }}
              >
                <span className="icon">{link.icon}</span>
                {link.text}
              </NavLink>
            </div>
          );
        })}
        <div className="menu-item">
          <Link
            to="/account/"
            className="btn btn--text btn--logout"
            onClick={() => dispatch(logoutUser("Logging out..."))}
          >
            <span className="icon">
              <HiLogout />
            </span>
            log out
          </Link>
        </div>
      </div>
      {(user.role === "admin" || user.role === "test") && <hr />}
      {(user.role === "admin" || user.role === "test") && (
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
                    return isActive ? "btn btn--text active" : "btn btn--text";
                  }}
                >
                  <span className="icon">{link.icon}</span>
                  {link.text}
                </NavLink>
              </div>
            );
          })}
        </div>
      )}
    </Wrapper>
  );
};

export default UserNavigation;
