import React from "react";
import Wrapper from "../assets/wrappers/PageHero";
import { Link } from "react-router-dom";

const PageHero = ({ page }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <Link to="/" className="btn">
          <h1>Home</h1>
        </Link>
        <h1 className="current-page">/{page && page}</h1>
      </div>
    </Wrapper>
  );
};

export default PageHero;
