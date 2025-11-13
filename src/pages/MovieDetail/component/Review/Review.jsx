// Review.jsx
import React, { useState } from "react";
import { useMovieReviewsQuery } from "../../../../hooks/useMovieReviews";

const Review = ({ id }) => {
  const { data: response, isLoading, isError, error } = useMovieReviewsQuery(id);

  const [openContent, SetOpenContent] = useState(null);
  if (isLoading) {
    return <h1 className="message">Loading...</h1>;
  }

  if (isError) {
    return <h1 className="message">{error.response?.data?.status_message || String(error)}</h1>;
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
