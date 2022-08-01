import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyOrder,
  getOrderById,
  updateOrderToDelivered,
} from "../../features/order/orderSlice";
import { Loader } from "../../components";
import Wrapper from "../../assets/wrappers/Order";
import moment from "moment";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
  const { isLoading, order } = useSelector((store) => store.order);
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    if (user.role === "user") {
      dispatch(getMyOrder(id));
    } else {
      dispatch(getOrderById(id));
    }
  }, [id]);

  const [orderData, setOrderData] = useState({
    isPaid: order?.isPaid || false,
    isDelivered: order?.isDelivered || false,
  });

  useEffect(() => {
    if (order) {
      setOrderData({
        isPaid: order.isPaid,
        isDelivered: order.isDelivered,
      });
    }
  }, [order]);

  if (isLoading) {
    return <Loader />;
  }

  if (!order) {
    return;
  }

  const {
    cart,
    created,
    isDelivered,
    isPaid,
    shippingAddress,
    user: orderUser,
  } = order;
  const date = moment(created).format("LLL");

  const handleCheckbox = (e) => {
    let name = e.target.name;
    let value = e.target.checked;
    dispatch(updateOrderToDelivered(order.id));
    setOrderData({ ...orderData, [name]: value });
  };

  return (
    <Wrapper>
      <h2>
        Order # <span className="order-id">{id}</span>
      </h2>
      <div className="order-container">
        <p className="date">{date}</p>
        <ul className="products">
          {cart.products.map((product, index) => {
            let templateArray = [];
            for (let i = 0; i < product.quantity; i++) {
              templateArray.push(
                <li key={index + i} className="product-item">
                  <img
                    src={product.product.primaryImage}
                    alt={product.product.name}
                  />
                  <div>
                    <h4>{product.product.name}</h4>
                    {product.style && (
                      <span className="additional-info">{`style: ${product.style}`}</span>
                    )}
                    {product.color && (
                      <span className="additional-info">{`color: ${product.color}`}</span>
                    )}
                  </div>
                  <p>${product.purchasePrice}</p>
                </li>
              );
            }
            return templateArray;
          })}
        </ul>
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
            <p>{orderUser.name}</p>
            <p>{`${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.postalCode}, ${shippingAddress.country}`}</p>
          </div>
          {user.role === "user" && (
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
          )}
          {(user.role === "admin" || user.role === "test") && (
            <div className="order-status">
              <div className="form-check">
                <input
                  type="checkbox"
                  name="isPaid"
                  id="isPaid"
                  onChange={handleCheckbox}
                  checked={orderData.isPaid}
                  disabled={order.isPaid}
                />
                <label htmlFor="isPaid">Paid</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  name="isDelivered"
                  id="isDelivered"
                  onChange={handleCheckbox}
                  checked={orderData.isDelivered}
                  disabled={order.isDelivered}
                />
                <label htmlFor="isDelivered">Delivered</label>
              </div>
            </div>
          )}
        </div>
      </div>
      <Link
        to={`${
          user.role === "admin"
            ? "/account/manage-orders"
            : "/account/my-orders"
        }`}
        className="btn btn--outlined"
      >
        back to orders
      </Link>
    </Wrapper>
  );
};

export default MyOrder;
