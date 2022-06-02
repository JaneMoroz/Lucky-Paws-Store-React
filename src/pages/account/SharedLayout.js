import React from "react";
import { Auth, PageHero, UserNavigation } from "../../components";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  const { user } = useSelector((store) => store.user);

  if (!user) {
    return (
      <div className="container--max">
        <PageHero page={"account"} />
        <Auth />
      </div>
    );
  }

  return (
    <Wrapper className="container--max">
      <PageHero page={"account"} />
      <UserNavigation />
      <Outlet />
    </Wrapper>
  );
};

export default SharedLayout;
