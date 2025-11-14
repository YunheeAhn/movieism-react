// Review.jsx
import React, { useState } from "react";
import { useMovieReviewsQuery } from "../../../../hooks/useMovieReviews";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../../../common/ErrorMessage";

const Review = ({ id }) => {
  const { data: response, isLoading, isError, error } = useMovieReviewsQuery(id);

  const [openContent, SetOpenContent] = useState(null);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }

  const reviews = response?.data?.results ?? [];

  const toggleContent = (index) => {
    SetOpenContent(openContent === index ? null : index); // 같은 버튼 클릭 시 닫기
  };

  return (
    <div className="review-wrap">
      {reviews.length === 0 ? (
        <p className="message">There are no reviews.</p>
      ) : (
        reviews.map((review, index) => (
          <dl key={index} className="review-item">
            <dt className="author">{review.author}</dt>
            <dd className="content">
              {openContent === index ? <p>{review.content}</p> : null}
              <button onClick={() => toggleContent(index)}>
                {openContent === index ? "Close Review" : "Show Review"}
              </button>
            </dd>
          </dl>
        ))
      )}
    </div>
  );
};

export default Review;
