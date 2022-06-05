import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyReviews } from "../../features/review/reviewSlice";
import { Loader, ManageItems } from "../../components";

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
      <div className="container--outlet">
        <h2>My Reviews</h2>
        <div className="container">
          <p className="empty">There are no reviews yet.</p>
          <button className="btn btn--outlined">Go back to home page</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container--outlet">
      <h2>My Reviews</h2>
      <ManageItems items={reviews} type="reviews" />
    </div>
  );
};

export default MyReviews;
