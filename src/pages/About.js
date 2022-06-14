import React from "react";
import Wrapper from "../assets/wrappers/About";
import img1 from "../assets/images/about-1.jpg";
import img2 from "../assets/images/about-2.jpg";
import img3 from "../assets/images/about-3.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Wrapper className="container--max">
      <div className="about-container">
        <div className="gallery">
          <div className="img img--1">
            <img src={img1} alt="Our Store" />
            <div className="image-overlay"></div>
          </div>
          <div className="img img--2">
            <img src={img2} alt="Lucy and her cat" />
            <div className="image-overlay"></div>
          </div>
          <div className="img img--3">
            <img src={img3} alt="Lucy's cat - Boris" />
            <div className="image-overlay"></div>
          </div>
        </div>
        <div className="text">
          <p className="main">
            Hi! My name is Lucy and I'm an owner of Lucky Paws Store.
          </p>
          <p className="secondary">
            One of the greatest advantages in starting a pet shop business is a
            chance to share your animal passion with others. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Quas, architecto iusto
            suscipit provident commodi neque tempora aperiam nobis dolore, eos
            debitis eligendi aut ipsa consequatur est repellat! Ducimus, modi
            sint?
          </p>
          <Link to="/all" className="btn btn--outlined">
            Back to store
          </Link>
        </div>
      </div>
      <div className={`background background--about`}></div>
    </Wrapper>
  );
};

export default About;
