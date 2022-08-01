import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../features/order/orderSlice";
import { Loader } from "../../components";
import { OrderItem } from "../../components";
import { Link } from "react-router-dom";

const ManageOrders = () => {
  const { isLoading, allOrders } = useSelector((store) => store.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (allOrders.length === 0) {
    return (
      <section>
        <h2>Manage Orders</h2>
        <div className="container">
          <p className="empty">There are no orders yet.</p>
          <Link to="/" className="btn btn--outlined">
            go back to home page
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2>Manage Orders</h2>
      <div className="container">
        {allOrders.map((order) => {
          return <OrderItem key={order._id} {...order} />;
        })}
      </div>
    </section>
  );
};

export default ManageOrders;
