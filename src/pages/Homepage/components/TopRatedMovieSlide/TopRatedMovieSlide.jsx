import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import MovieCard from "../../../../common/MovieCard/MovieCard";
import ErrorMessage from "../../../../common/ErrorMessage";

const TopRatedMovieSlide = ({ responsive }) => {
  const { data, isError, error } = useTopRatedMoviesQuery();

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  if (!data?.results?.length) {
    return <h1 className="message">No Top Rated movies found.</h1>;
  }

  return (
    <div className="slide-section">
      <h3 className="slide-title">Top Rated Movies</h3>

      <div className="slider-container">
        <Carousel responsive={responsive} className="top-movie-roll">
          {data.results.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TopRatedMovieSlide;
