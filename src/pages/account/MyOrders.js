import React, { useEffect } from "react";
import Wrapper from "../../assets/wrappers/Orders";
import { OrderItem, Loader } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../../features/order/orderSlice";

const MyOrders = () => {
  const { isLoading, orders } = useSelector((store) => store.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyOrders());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (orders.length === 0) {
    return (
      <Wrapper>
        <h2>Your orders</h2>
        <div className="container">
          <p className="empty">You have no orders.</p>
          <button className="btn btn--outlined">back to store</button>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2>Your orders</h2>
      <div className="orders-container">
        {orders.map((order) => {
          return <OrderItem key={order._id} {...order} />;
        })}
      </div>
    </Wrapper>
  );
};

export default MyOrders;
