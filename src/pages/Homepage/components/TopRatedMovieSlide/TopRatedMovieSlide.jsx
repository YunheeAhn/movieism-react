import React from "react";

import Slider from "react-slick";
import MovieCard from "../MovieCard/MovieCard";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";

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
    mobileFirst: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
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
