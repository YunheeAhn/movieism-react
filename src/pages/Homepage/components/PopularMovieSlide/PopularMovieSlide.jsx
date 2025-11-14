import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import MovieCard from "../../../../common/MovieCard/MovieCard";

const PopularMovieSlide = ({ responsive }) => {
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
