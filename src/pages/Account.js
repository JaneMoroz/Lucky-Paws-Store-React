import React from "react";
import { Auth, UserAccount, PageHero } from "../components/";
import { useSelector } from "react-redux";

const Account = () => {
  const { user } = useSelector((store) => store.user);

  if (!user) {
    return (
      <>
        <PageHero page={"account"} />
        <Auth />
      </>
    );
  }

  return (
    <>
      <PageHero page={"account"} />
      <UserAccount />
    </>
  );
};

export default Account;
