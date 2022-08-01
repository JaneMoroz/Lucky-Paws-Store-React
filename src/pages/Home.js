import React from "react";
import Wrapper from "../assets/wrappers/Home";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img1Webp from "../assets/images/1.webp";
import img2Webp from "../assets/images/2.webp";
import img3Webp from "../assets/images/3.webp";
import img4Webp from "../assets/images/4.webp";
import { Link } from "react-router-dom";
import { Image } from "../components";

const Home = () => {
  return (
    <Wrapper className="container--max">
      <ul className="nav-list">
        <li className="nav-item nav-item--1">
          {/* <img className="img" src={img1} alt="for dogs" /> */}
          <Image src={img1Webp} fallback={img1} alt="for dogs" />
          <Link to="/dog" className="btn">
            <h1 name="dog">
              for <span>dog</span>
            </h1>
          </Link>
        </li>
        <li className="nav-item nav-item--2">
          <Image src={img2Webp} fallback={img2} alt="for cats" />
          {/* <img className="img" src={img2} alt="for cats" /> */}
          <Link to="/cat" className="btn">
            <h1>
              for <span>cat</span>
            </h1>
          </Link>
        </li>
        <li className="nav-item nav-item--3">
          <Image src={img3Webp} fallback={img3} alt="all products" />
          {/* <img className="img" src={img3} alt="all products" /> */}
          <Link to="/all" className="btn">
            <h1>
              <span>all</span> products
            </h1>
          </Link>
        </li>
        <li className="nav-item nav-item--4">
          <Image src={img4Webp} fallback={img4} alt="about" />
          {/* <img className="img" src={img4} alt="about" /> */}
          <Link to="/about" className="btn">
            <h1>
              <span>about</span>
            </h1>
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Home;
