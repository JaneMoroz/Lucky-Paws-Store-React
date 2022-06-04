import React from "react";
import Wrapper from "../assets/wrappers/Error";
import img from "../assets/images/error-image.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper className="container--max">
      <h2>Ohh! Page not found</h2>
      <p>We can't seem to find the page you're looking for!</p>
      <Link className="btn btn--outlined" to="/">
        back home
      </Link>
      <img src={img} alt="Cat and Dog" />
    </Wrapper>
  );
};

export default Error;
