import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import MovieCard from "../../../../common/MovieCard/MovieCard";

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

  if (isLoading) {
    return <h1 className="message">Loading...</h1>;
  }

  if (isError) {
    return <h1 className="message">{error.message}</h1>;
  }
  if (!data?.results?.length) {
    return <h1 className="message">No Top Rated movies found.</h1>;
  }

  const settings = {
    dots: false,
    infinite: true,
    mobileFirst: false,
    speed: 500,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024, // 1024 이하
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, // 768 이하
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 680, // 680 이하
        settings: { slidesToShow: 1, centerMode: true },
      },
    ],
  };
  return (
    <div className="slide-section">
      <h3 className="slide-title">Top Rated Movies</h3>

      <div className="slider-container">
        <Slider {...settings} className="top-movie-roll">
          {data.results.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopRatedMovieSlide;
