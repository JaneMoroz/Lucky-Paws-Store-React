import React from "react";
import { Auth, UserAccount } from "../components/";
import { useSelector } from "react-redux";

const Account = () => {
  const { user } = useSelector((store) => store.user);

  if (!user) {
    return <Auth />;
  }

  return <UserAccount />;
};

export default Account;
