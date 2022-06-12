import React from "react";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";
import Wrapper from "../assets/wrappers/ManageItems";
import defaultImage from "../assets/images/default.jpg";
import { Link } from "react-router-dom";
import { deleteProduct } from "../features/product/productSlice";
import { useDispatch } from "react-redux";

const ManageItems = ({ items, type }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      {items.map((item, index) => {
        let itemData = {};
        if (type === "products") {
          itemData.name = item.name;
          itemData.image = item.primaryImage;
          itemData.id = item.id;
        }
        if (type === "users") {
          itemData.name = item.name;
          itemData.image = item.photo;
        }
        if (type === "reviews") {
          itemData.title = item.title;
          itemData.review = item.review;
          itemData.productId = item.product;
          itemData.rating = item.rating;
        }
        return (
          <div key={index} className="item">
            {itemData.image && (
              <img
                src={itemData.image}
                alt={itemData.name}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = defaultImage;
                }}
              />
            )}
            {itemData.rating && <h2>{itemData.rating}/5</h2>}
            <div className="text-container">
              <h3>{itemData.title}</h3>
              <h4>{itemData.name}</h4>
              <p>{itemData.review}</p>
              {itemData.productId && (
                <Link
                  to={`/products/${itemData.productId}`}
                  className="btn btn--text"
                >
                  #{itemData.productId}
                </Link>
              )}
            </div>
            <div className="btns-container">
              {type !== "reviews" && type !== "users" && (
                <Link to={`/products/${itemData.id}`} className="btn">
                  <FaEye className="icon" />
                </Link>
              )}
              {type === "products" && (
                <button
                  onClick={() => dispatch(deleteProduct(itemData.id))}
                  className="btn"
                >
                  <FaRegTrashAlt className="icon" />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default ManageItems;
