import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import MovieCard from "../../../../common/MovieCard/MovieCard";
import ErrorMessage from "../../../../common/ErrorMessage";

const PopularMovieSlide = ({ responsive }) => {
  const { data, isError, error } = usePopularMoviesQuery();

  if (isError) {
    return <ErrorMessage error={error} />;
  }
  if (!data?.results?.length) {
    return <h1 className="message">No popular movies found.</h1>;
  }

  return (
    <div className="slide-section">
      <h3 className="slide-title">Popular Movies</h3>

      <div className="slider-container">
        <Carousel responsive={responsive} className="popular-movie-roll">
          {data.results.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PopularMovieSlide;
