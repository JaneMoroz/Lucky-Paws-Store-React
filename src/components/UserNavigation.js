import React from "react";
import Wrapper from "../assets/wrappers/UserNavigation";
import { userLinks, adminLinks } from "../utils/links";
import { HiKey, HiLogout } from "../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { clearAllAfterLogout } from "../features/user/userSlice";
import { Link, NavLink } from "react-router-dom";

const UserNavigation = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <nav className="menu menu--user">
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
            onClick={() => dispatch(clearAllAfterLogout("Logging out..."))}
          >
            <span className="icon">
              <HiLogout />
            </span>
            log out
          </Link>
        </div>
      </nav>
      {(user.role === "admin" || user.role === "test") && <hr />}
      {(user.role === "admin" || user.role === "test") && (
        <nav className="menu">
          <span className="admin">
            <HiKey />
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
        </nav>
      )}
    </Wrapper>
  );
};

export default UserNavigation;
