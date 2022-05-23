import React from "react";
import Wrapper from "../assets/wrappers/Page";

const Page = () => {
  const page = window.location.pathname;
  return (
    <Wrapper>
      {page === "/dog" && <div className="background background--1"></div>}
      {page === "/cat" && <div className="background background--2"></div>}
      {page === "/all" && <div className="background background--3"></div>}
      {page === "/about" && <div className="background background--4"></div>}
    </Wrapper>
  );
};

export default Page;
