import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../features/user/userSlice";
import { Loader, ManageItems } from "../../components";
import { Link } from "react-router-dom";

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
      <section className="container--outlet">
        <h2>Manage Users</h2>
        <div className="container">
          <p className="empty">Something went wrong!</p>
          <Link to="/all" className="btn btn--outlined">
            Go back to home page
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container--outlet">
      <h2>Manage Users</h2>
      <ManageItems items={users} type="users" />
    </section>
  );
};

export default ManageProducts;
