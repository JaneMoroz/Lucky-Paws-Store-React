import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrder } from "../../features/order/orderSlice";
import { Loader } from "../../components";
import Wrapper from "../../assets/wrappers/MyOrder";
import moment from "moment";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
  const { isLoading, order } = useSelector((store) => store.order);
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(getMyOrder(id));
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!order) {
    return;
  }

  const { cart, created, isDelivered, isPaid, shippingAddress } = order;
  const date = moment(created).format("LLL");

  return (
    <Wrapper>
      <h2>Order # {id}</h2>
      <div className="order-container">
        <p className="date">{date}</p>
        <div className="products">
          {cart.products.map((product, index) => {
            let templateArray = [];
            for (let i = 0; i < product.quantity; i++) {
              templateArray.push(
                <div key={index + i} className="product-item">
                  <img
                    src={product.product.primaryImage}
                    alt={product.product.name}
                  />
                  <h4>{product.product.name}</h4>
                  <p>{product.purchasePrice}</p>
                </div>
              );
            }
            return templateArray;
          })}
        </div>
        <div className="order-total">
          <p>
            Subtotal: <span>${cart.subtotal}</span>
          </p>
          <p>
            Taxes: <span>${cart.taxes}</span>
          </p>
          <p>
            Shipping price: <span>${cart.shippingPrice}</span>
          </p>
          <p className="total">
            Total: <span>${cart.total}</span>
          </p>
        </div>
        <div className="order-details">
          <div className="order-user">
            <p>{user.name}</p>
            <p>{`${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.postalCode}, ${shippingAddress.country}`}</p>
          </div>
          <div className="order-status">
            <div className="status">
              <span
                className={`square ${
                  isPaid ? "square--success" : "square--danger"
                }`}
              ></span>{" "}
              <span>Paid</span>
            </div>
            <div className="status">
              <span
                className={`square ${
                  isDelivered ? "square--success" : "square--danger"
                }`}
              ></span>{" "}
              <span>Delivered</span>
            </div>
          </div>
        </div>
      </div>
      <Link to="/account/my-orders" className="btn btn--outlined">
        back to orders
      </Link>
    </Wrapper>
  );
};

export default MyOrder;
