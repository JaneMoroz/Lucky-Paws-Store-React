import React from "react";
import Wrapper from "../assets/wrappers/Home";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper>
      <div className="section section--1">
        <img className="img" src={img1} alt="for dogs" />
        <Link to="/dog" className="btn">
          <h1 name="dog">
            for <span>dog</span>
          </h1>
        </Link>
      </div>
      <div className="section section--2">
        <img className="img" src={img2} alt="for cats" />
        <Link to="/cat" className="btn">
          <h1>
            for <span>cat</span>
          </h1>
        </Link>
      </div>
      <div className="section section--3">
        <img className="img" src={img3} alt="all products" />
        <Link to="/all" className="btn">
          <h1>
            <span>all</span> products
          </h1>
        </Link>
      </div>
      <div className="section section--4">
        <img className="img" src={img4} alt="about" />
        <Link to="/about" className="btn">
          <h1>
            <span>about</span>
          </h1>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Home;
