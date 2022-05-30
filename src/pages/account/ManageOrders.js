import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../features/order/orderSlice";
import { Loader, ManageItems } from "../../components";
import { OrderItem } from "../../components";

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
      <div>
        <h2>Manage Orders</h2>
        <div className="container">
          <p className="empty">There are no orders yet.</p>
          <button className="btn btn--outlined">go back to home page</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>Manage Orders</h2>
      <div className="container">
        {allOrders.map((order) => {
          return <OrderItem key={order._id} {...order} />;
        })}
      </div>
    </div>
  );
};

export default ManageOrders;
