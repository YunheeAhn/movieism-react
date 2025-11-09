import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";

import Slider from "react-slick";
import MovieCard from "../MovieCard/MovieCard";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <h1 className="message">Loading...</h1>;
  }

  if (isError) {
    return <h1 className="message">{error.message}</h1>;
  }
  if (!data?.results?.length) {
    return <h1 className="message">No popular movies found.</h1>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
  };
  return (
    <div className="slide-section">
      <h3 className="slide-title">Popular Movies</h3>

      <div className="slider-container">
        <Slider {...settings} className="popular-movie-roll">
          {data.results.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularMovieSlide;
