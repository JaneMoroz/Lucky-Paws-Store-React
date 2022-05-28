import React from "react";
import Wrapper from "../assets/wrappers/UserNavigation";
import { userLinks, adminLinks } from "../utils/links";
import { BsKeyFill } from "react-icons/bs";

const UserNavigation = () => {
  return (
    <Wrapper>
      <div className="menu">
        {userLinks.map((link) => {
          return (
            <div key={link.id} className="menu-item">
              <span className="icon">{link.icon}</span>
              <button className="btn btn--text">{link.text}</button>
            </div>
          );
        })}
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
