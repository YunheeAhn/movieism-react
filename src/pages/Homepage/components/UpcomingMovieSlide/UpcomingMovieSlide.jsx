import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useUpcomingMoviesQuery } from "../../../../hooks/useUpcomingMovies";
import MovieCard from "../../../../common/MovieCard/MovieCard";
import ErrorMessage from "../../../../common/ErrorMessage";

const UpcomingMovieSlide = ({ responsive }) => {
  const { data, isError, error } = useUpcomingMoviesQuery();

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  if (!data?.results?.length) {
    return <h1 className="message">No Upcoming movies found.</h1>;
  }

  return (
    <div className="slide-section">
      <h3 className="slide-title">Upcoming Movies</h3>

      <div className="slider-container">
        <Carousel responsive={responsive} className="upcoming-movie-roll">
          {data.results.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default UpcomingMovieSlide;
