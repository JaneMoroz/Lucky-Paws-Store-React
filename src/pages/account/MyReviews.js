import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyReviews } from "../../features/review/reviewSlice";
import { Loader, ManageItems } from "../../components";
import { Link } from "react-router-dom";

const MyReviews = () => {
  const { isLoading, reviews } = useSelector((store) => store.review);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyReviews());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (reviews.length === 0) {
    return (
      <section className="container--outlet">
        <h2>My Reviews</h2>
        <div className="container">
          <p className="empty">There are no reviews yet.</p>
          <Link to="/all" className="btn btn--outlined">
            back to store
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container--outlet">
      <h2>My Reviews</h2>
      <ManageItems items={reviews} type="reviews" />
    </section>
  );
};

export default MyReviews;
