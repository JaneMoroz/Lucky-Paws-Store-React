import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../features/user/userSlice";
import { Loader, ManageItems } from "../../components";

const ManageProducts = () => {
  const { isLoading, users } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (users.length === 0) {
    return (
      <div className="container--outlet">
        <h2>Manage Users</h2>
        <div className="container">
          <p className="empty">Something went wrong!</p>
          <button className="btn btn--outlined">go back to home page</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container--outlet">
      <h2>Manage Users</h2>
      <ManageItems items={users} type="users" />
    </div>
  );
};

export default ManageProducts;
