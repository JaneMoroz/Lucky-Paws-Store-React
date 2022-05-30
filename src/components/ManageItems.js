import React from "react";
import { FaEye, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import Wrapper from "../assets/wrappers/ManageItems";

const ManageItems = ({ items, type }) => {
  return (
    <Wrapper>
      {items.map((item, index) => {
        let itemData = {};
        if (type === "products") {
          itemData.name = item.name;
          itemData.image = item.primaryImage;
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
            {itemData.image && <img src={itemData.image} alt={itemData.name} />}
            {itemData.rating && <h2>{itemData.rating}/5</h2>}
            <div className="text-container">
              <h3>{itemData.title}</h3>
              <h4>{itemData.name}</h4>
              <p>{itemData.review}</p>
              {itemData.productId && (
                <button className="btn btn--text">#{itemData.productId}</button>
              )}
            </div>
            <div className="btns-container">
              {type !== "reviews" && type !== "users" && (
                <button className="btn">
                  <FaEye className="icon" />
                </button>
              )}
              {type !== "reviews" && (
                <button className="btn">
                  <FaPencilAlt className="icon" />
                </button>
              )}
              <button className="btn">
                <FaRegTrashAlt className="icon" />
              </button>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default ManageItems;
