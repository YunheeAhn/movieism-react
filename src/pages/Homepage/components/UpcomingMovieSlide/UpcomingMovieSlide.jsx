import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import { useUpcomingMoviesQuery } from "../../../../hooks/useUpcomminMovies";
import MovieCard from "../../../../common/MovieCard/MovieCard";

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

  if (isLoading) {
    return <h1 className="message">Loading...</h1>;
  }

  if (isError) {
    return <h1 className="message">{error.message}</h1>;
  }
  if (!data?.results?.length) {
    return <h1 className="message">No Upcoming movies found.</h1>;
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
      <h3 className="slide-title">Upcoming Movies</h3>

      <div className="slider-container">
        <Slider {...settings} className="upcoming-movie-roll">
          {data.results.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default UpcomingMovieSlide;
