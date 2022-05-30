import React from "react";
import Wrapper from "../assets/wrappers/OrderItem";
import moment from "moment";
import { Link } from "react-router-dom";

const OrderItem = ({
  _id,
  cart,
  created,
  isDelivered,
  isPaid,
  shippingAddress,
}) => {
  let totalQuantity = cart.products[0].quantity;
  if (cart.products.length > 1) {
    totalQuantity = cart.products.reduce(
      (a, b) => Number(a.quantity) + Number(b.quantity)
    );
  }

  const date = moment(created).format("MMM Do, YYYY");

  return (
    <Wrapper>
      <div className="order">
        <Link to={`${_id}`}>
          <h3>{date}</h3>
        </Link>

        {cart.products.map((product, index) => {
          return (
            <div key={index} className="order-item">
              <p className="title">{product.product.name}</p>
              <span className="quantity">{product.quantity}pc</span>
              <span className="price">${product.purchasePrice}</span>
            </div>
          );
        })}
        <div className="order-total">
          <div className="status">
            <p>
              <span className={`${isPaid && "status--success"}`}></span>Paid
            </p>
            <p>
              <span className={`${isDelivered && "status--success"}`}></span>
              Delivered
            </p>
          </div>
          <span className="quantity">{totalQuantity}pc</span>
          <span className="price">${cart.total}</span>
        </div>
        <p className="address">
          {`${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.postalCode}, ${shippingAddress.country}`}
        </p>
      </div>
    </Wrapper>
  );
};

export default OrderItem;
