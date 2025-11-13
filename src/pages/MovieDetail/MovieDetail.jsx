import React from "react";
import DetailCard from "./component/DetailCard/DetailCard";
import Review from "./component/Review/Review";
import { useParams } from "react-router";

const MovieDetail = () => {
  const { id } = useParams();

  return (
    <section className="movies-detail w1700">
      <div className="detail-card">
        <DetailCard id={id} />
      </div>
      <div className="review">
        <h2>Reviews</h2>
        <Review id={id} />
      </div>
      <div className="recommend"></div>
    </section>
  );
};

export default MovieDetail;
