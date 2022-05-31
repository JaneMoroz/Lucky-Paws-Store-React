import React from "react";
import Wrapper from "../assets/wrappers/Products";
import Stars from "../components/Stars";
import { BsSearch } from "react-icons/bs";

const Products = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product, index) => {
          return (
            <div key={index} className="product">
              <div className="image-container">
                <img src={product.primaryImage} alt={product.name} />
                <button className="btn search">
                  <BsSearch />
                </button>
              </div>
              <div className="details">
                <div>
                  <h3>{product.name}</h3>
                  <p className="category">
                    {product.type}/{product.subType}
                  </p>
                </div>

                <p className="price">${product.price}</p>
              </div>
              <div className="btns">
                <Stars
                  stars={product.ratingsAverage}
                  reviews={product.ratingsQuantity}
                />
                <button className="btn btn--outlined">details</button>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Products;
