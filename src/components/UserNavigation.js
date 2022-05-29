import React from "react";
import Wrapper from "../assets/wrappers/UserNavigation";
import { userLinks, adminLinks } from "../utils/links";
import { BsKeyFill } from "react-icons/bs";
import { HiLogout } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/user/userSlice";

const UserNavigation = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="menu menu--user">
        {userLinks.map((link) => {
          return (
            <div key={link.id} className="menu-item">
              <span className="icon">{link.icon}</span>
              <button className="btn btn--text">{link.text}</button>
            </div>
          );
        })}
        <div className="menu-item">
          <span className="icon">
            <HiLogout />
          </span>
          <button
            className="btn btn--text"
            onClick={() => dispatch(logoutUser("Logging out..."))}
          >
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
              <span className="icon">{link.icon}</span>
              <button className="btn btn--text">{link.text}</button>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default UserNavigation;
