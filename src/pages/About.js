import React from "react";
import Wrapper from "../assets/wrappers/About";
import img1 from "../assets/images/about-1.jpg";
import img2 from "../assets/images/about-2.jpg";
import img3 from "../assets/images/about-3.jpg";
import img1Webp from "../assets/images/about-1.webp";
import img2Webp from "../assets/images/about-2.webp";
import img3Webp from "../assets/images/about-3.webp";
import { Link } from "react-router-dom";
import { Image } from "../components";

const About = () => {
  return (
    <Wrapper className="container--max">
      <div className="about-container">
        <section className="gallery">
          <div className="img img--1">
            <Image src={img1Webp} fallback={img1} alt="Our Store" />
            {/* <img src={img1} alt="Our Store" /> */}
            <div className="image-overlay"></div>
          </div>
          <div className="img img--2">
            <Image src={img2Webp} fallback={img2} alt="Lucy and her cat" />
            {/* <img src={img2} alt="Lucy and her cat" /> */}
            <div className="image-overlay"></div>
          </div>
          <div className="img img--3">
            <Image src={img3Webp} fallback={img3} alt="Lucy's cat - Boris" />
            {/* <img src={img3} alt="Lucy's cat - Boris" /> */}
            <div className="image-overlay"></div>
          </div>
        </section>
        <section className="text">
          {/* <p className="main">
            Hi! My name is Lucy and I'm an owner of Lucky Paws Store.
          </p> */}
          <h1 className="main">
            Hi! My name is Lucy and I'm an owner of Lucky Paws Store.
          </h1>
          <p className="secondary">
            One of the greatest advantages in starting a pet shop business is a
            chance to share your animal passion with others. My mission is to
            service the community and their pets with outstanding services and
            high quality products. Lucky paws store offers a variety of brands
            of dry, wet, treats, toys, raw and fresh food, aquatics, and more.
          </p>
          <Link to="/all" className="btn btn--outlined">
            Back to store
          </Link>
        </section>
      </div>
      <div className={`background background--about`}></div>
    </Wrapper>
  );
};

export default About;
