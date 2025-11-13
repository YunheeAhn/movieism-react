// Review.jsx
import React from "react";
import { useMovieReviewsQuery } from "../../../../hooks/useMovieReviews";

const Review = ({ id }) => {
  const { data: response, isLoading, isError, error } = useMovieReviewsQuery(id);

  if (isLoading) {
    return <h1 className="message">Loading...</h1>;
  }

  if (isError) {
    return <h1 className="message">{error.response?.data?.status_message || String(error)}</h1>;
  }

  const reviews = response?.data?.results ?? [];

  return (
    <div className="review-wrap">
      {reviews.length === 0 ? (
        <p className="message">There are no reviews.</p>
      ) : (
        reviews.map((review, index) => (
          <dl key={index} className="review-item">
            <dt className="author">{review.author}</dt>
            <dd className="content">{review.content}</dd>
          </dl>
        ))
      )}
    </div>
  );
};

export default Review;
