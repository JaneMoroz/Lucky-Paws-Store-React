import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Wrapper from "../assets/wrappers/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../features/product/productSlice";
import { Loader, PageHero, Stars } from "../components";
import { HiMinus, HiPlus } from "react-icons/hi";
import { updateFilter } from "../features/product/productSlice";
import { addItemToCart } from "../features/cart/cartSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
  const { isLoading, product } = useSelector((store) => store.product);
  const { isLoading: addingToCartLoading } = useSelector((store) => store.cart);

  const [main, setMain] = useState(null);
  const [colorChoice, setColorChoice] = useState(null);
  const [styleChoice, setStyleChoice] = useState(null);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [id]);

  useEffect(() => {
    if (product) {
      setMain(product.primaryImage);
      if (product.color.length !== 0) {
        setColorChoice(product.color[0]);
      }
      if (product.style.length !== 0) {
        setStyleChoice(product.style[0]);
      }
    }
  }, [product]);

  if (isLoading) {
    return <Loader />;
  }

  if (!product) {
    return;
  }

  const handleClick = (btn) => {
    if (btn === "type") {
      dispatch(updateFilter({ name: "type", value: product.type }));
    } else {
      dispatch(updateFilter({ name: "brand", value: product.brand }));
    }
  };

  const handleOption = (e, optionType) => {
    if (optionType === "color") {
      setColorChoice(e.target.innerText);
    } else {
      setStyleChoice(e.target.innerText);
    }
  };

  const handleAmount = (direction) => {
    if (direction === "inc") {
      setAmount(amount + 1);
    }
    if (direction === "dec") {
      if (amount > 1) {
        setAmount(amount - 1);
      } else {
        setAmount(1);
      }
    }
  };

  const handleAddToCart = () => {
    let cartItem = {
      product: id,
      purchasePrice: product.price,
      quantity: amount,
    };
    if (styleChoice) {
      cartItem.style = styleChoice;
    }
    if (colorChoice) {
      cartItem.color = colorChoice;
    }
    dispatch(addItemToCart(cartItem));
  };

  const {
    brand,
    color: colors,
    features,
    isActive,
    name,
    otherImages,
    price,
    primaryImage,
    ratingsAverage,
    ratingsQuantity,
    style: styles,
    type,
  } = product;

  return (
    <Wrapper className="container--max">
      <PageHero page="for cats" />
      <div className="product-container">
        <div className="images">
          <img className="main-image" src={main} alt={name} />
          <div className="gallery">
            <img
              src={primaryImage}
              alt={name}
              onClick={() => setMain(primaryImage)}
              className={`${primaryImage === main ? "active" : ""}`}
            ></img>
            {otherImages.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt={`${name} ${index}`}
                  onClick={() => setMain(otherImages[index])}
                  className={`${image === main ? "active" : ""}`}
                ></img>
              );
            })}
          </div>
        </div>
        <div className="text">
          <div className="header">
            <div className="btn-container">
              <Link
                to="/all"
                onClick={() => handleClick("type")}
                className="btn btn--solid"
              >
                {type}
              </Link>
              <Link
                to="/all"
                onClick={() => handleClick("brand")}
                className="btn btn--solid"
              >
                {brand}
              </Link>
            </div>

            <Stars stars={ratingsAverage} reviews={ratingsQuantity} />
          </div>
          <div className="main">
            <h2>{name}</h2>
            <div className="options">
              {colors.length !== 0 && (
                <div className="option">
                  <h3>Colors:</h3>
                  {colors.map((color, index) => {
                    return (
                      <button
                        onClick={(e) => handleOption(e, "color")}
                        key={index}
                        className={`btn btn--outlined ${
                          color === colorChoice ? "btn--active" : ""
                        }`}
                      >
                        {color}
                      </button>
                    );
                  })}
                </div>
              )}
              {styles.length !== 0 && (
                <div className="option">
                  <h3>Styles:</h3>
                  {styles.map((style, index) => {
                    return (
                      <button
                        onClick={(e) => handleOption(e, "style")}
                        key={index}
                        className={`btn btn--outlined ${
                          style === styleChoice ? "btn--active" : ""
                        }`}
                      >
                        {style}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            {features.length !== 0 && (
              <div className="features">
                <h3>Features:</h3>
                <ul className="features-list">
                  {features.map((feature, index) => {
                    return <li key={index}>{feature}</li>;
                  })}
                </ul>
              </div>
            )}
            <div className="main-footer">
              <div className="quantity">
                <button onClick={() => handleAmount("dec")} className="btn">
                  <HiMinus className="icon" />
                </button>
                <span>{amount}</span>
                <button onClick={() => handleAmount("inc")} className="btn">
                  <HiPlus className="icon" />
                </button>
              </div>
              <p className="price">${price}</p>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="btn btn--outlined"
            disabled={!isActive || addingToCartLoading}
          >
            {addingToCartLoading ? "adding..." : "add to cart"}
          </button>
          <Link to="/all" className="btn btn--outlined">
            back to store
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProduct;
