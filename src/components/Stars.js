import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "../utils/icons";
import Wrapper from "../assets/wrappers/Stars";

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} className="star">
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="stars">{tempStars}</div>
      <p>{`${reviews} ${reviews !== 1 ? "reviews" : "review"}`}</p>
    </Wrapper>
  );
};

export default Stars;
