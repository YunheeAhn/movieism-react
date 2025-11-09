import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide/UpcomingMovieSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";

// 1. 배너 생성 => popular 영화의 첫번째 아이템
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie

const Homepage = () => {
  return (
    <div>
      <Banner />
      <section className="w1700">
        <UpcomingMovieSlide />
        <TopRatedMovieSlide />
        <PopularMovieSlide />
      </section>
    </div>
  );
};

export default Homepage;
