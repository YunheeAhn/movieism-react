import React from "react";
import DetailCard from "./component/DetailCard/DetailCard";

const MovieDetail = () => {
  return (
    <section className="movies-detail w1700">
      <div className="detail-card">
        <DetailCard />
      </div>
      <div className="review"></div>
      <div className="recommend"></div>
    </section>
  );
};

export default MovieDetail;
