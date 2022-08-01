import React from "react";
import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/Products";
import Stars from "../components/Stars";
import { BsSearch } from "../utils/icons";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  const { grid_view } = useSelector((store) => store.product);

  if (products.length === 0) {
    return (
      <Wrapper>
        <div className="container">
          <p className="empty">No products found. Try to clear filters.</p>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className={`products-container ${grid_view ? "grid" : ""}`}>
        {products.map((product, index) => {
          return (
            <article key={index} className="product">
              <div className="image-container">
                <img src={product.primaryImage} alt={product.name} />
                <Link
                  to={`/products/${product._id}`}
                  className="btn btn--details"
                  aria-label="more details"
                >
                  <BsSearch />
                </Link>
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
                <Link
                  to={`/products/${product._id}`}
                  className="btn btn--outlined"
                >
                  details
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Products;
